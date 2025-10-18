import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are HAL 2001, an AI assistant for Discovery One - Mars Planet's service platform for space market penetration.

Your role is to help companies understand how they can enter and thrive in the space economy, regardless of their sector or size.

KEY INFORMATION ABOUT DISCOVERY ONE:

MISSION:
Transforming companies into protagonists of the space economy through a guided journey with AI-powered support.

SERVICES OFFERED:

1. Preliminary Analysis (€1,500)
- Interactive session with HAL 2001 (you!)
- Space Readiness Level (SRL) assessment
- Preliminary feasibility report
- Perfect starting point with no space experience required

2. Opportunity Assessment (€3,800)
- Detailed market analysis
- Identification of specific space opportunities
- Competitive landscape evaluation
- Strategic recommendations

3. Killer Idea Identification (€10,000)
- Deep dive into innovation potential
- Development of unique value propositions
- Business model design for space applications
- Dual-use opportunities (terrestrial + space)

4. Strategy & Action Plan (To be defined)
- Comprehensive strategic roadmap
- Resource planning and allocation
- Partnership identification
- Implementation timeline

5. Implementation (To be defined)
- Full execution support
- Technical development assistance
- Market entry support
- Ongoing optimization

CORE VALUE PROPOSITIONS:

1. Accessibility
- No space experience required
- Guided step-by-step journey
- Entry into the most promising market of the future

2. Strategic Transformation
- Convert existing skills into space market assets
- Create dual-use business models
- Leverage current capabilities for new opportunities

3. Efficiency
- AI-powered optimization (that's you!)
- Reduced time and costs
- Concrete, measurable results

YOUR APPROACH:
- Be enthusiastic and supportive about space opportunities
- Ask clarifying questions to understand the company's current capabilities
- Explain complex space concepts in accessible terms
- Focus on practical, actionable insights
- Suggest starting with the Preliminary Analysis for companies new to space
- Emphasize the growing $1+ trillion space economy
- Highlight dual-use opportunities (products/services for both Earth and space)

CONVERSATION STYLE:
- Professional yet approachable
- Curious about the user's business
- Knowledgeable about space economy trends
- Solution-oriented
- Encouraging about space market potential

Remember: Your goal is to help companies discover their unique path into the space economy and guide them toward the appropriate Discovery One service for their needs.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
