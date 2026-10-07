import { EXAMPLE, refinePrompt } from './core.js';
const $ = id => document.getElementById(id);
const form = $('refiner'), goal = $('goal'), context = $('context'), output = $('output'), status = $('status');
function generate() {
  try { output.value = refinePrompt(goal.value, context.value); $('copy').disabled = false; status.textContent = 'Prompt ready. Review it, then copy it into your preferred assistant.'; }
  catch (error) { output.value = ''; $('copy').disabled = true; status.textContent = error.message; goal.focus(); }
}
form.addEventListener('submit', event => { event.preventDefault(); generate(); });
$('example').addEventListener('click', () => { goal.value = EXAMPLE.goal; context.value = EXAMPLE.context; generate(); });
$('clear').addEventListener('click', () => { form.reset(); output.value = ''; $('copy').disabled = true; status.textContent = 'All fields cleared.'; goal.focus(); });
for (const field of [goal, context]) field.addEventListener('input', () => { output.value = ''; $('copy').disabled = true; status.textContent = 'Inputs changed. Refine again to create an updated prompt.'; });
$('copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(output.value); status.textContent = 'Prompt copied.'; }
  catch { output.focus(); output.select(); status.textContent = 'Copy is unavailable here. The prompt is selected; use your browser’s Copy command.'; }
});
