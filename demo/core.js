export const EXAMPLE = Object.freeze({ goal: 'Help me learn Git with a small weekend project.', context: 'I am a beginner and have two hours. Use a local repository and explain each command.' });
export function refinePrompt(goal, context = '') {
  if (typeof goal !== 'string' || !goal.trim()) throw new Error('Enter a goal with at least one non-space character.');
  if (typeof context !== 'string' || goal.length > 5000 || context.length > 5000) throw new Error('Keep each field within 5,000 characters.');
  return `Goal\n${goal.trim()}\n\nContext and constraints\n${context.trim() || 'No additional context provided.'}\n\nApproach\nUse clear, practical steps. State important assumptions. Ask a clarifying question only if missing information would materially change the result.\n\nDeliverable\nProvide a useful result that addresses the goal and respects the constraints. Explain unfamiliar concepts briefly.\n\nQuality check\nCheck the result against the goal, identify limitations, and suggest a concrete next step.`;
}
