const examples = [
  { test: /devops/i, title: 'DevOps — interview-ready answer', text: 'DevOps is a way of working where development and operations teams share responsibility for delivering software quickly and reliably. It uses automation for build, test, deployment, monitoring, and feedback. A practical example is a CI/CD pipeline that tests code after every change and deploys an approved release automatically.' },
  { test: /docker|kubernetes/i, title: 'Docker and Kubernetes — interview-ready answer', text: 'Docker packages an application with its dependencies into a portable container. Kubernetes manages many containers across servers: it handles deployment, scaling, service discovery, recovery, and updates. Use Docker to create and run containers; use Kubernetes to operate them reliably at scale.' },
  { test: /aws|cloud/i, title: 'Cloud — interview-ready answer', text: 'Cloud platforms provide computing resources on demand. In AWS, EC2 runs virtual servers, S3 stores files, RDS provides managed databases, and IAM controls access. A strong answer should connect the service to a real use case, security, monitoring, and cost awareness.' }
];
const form = document.querySelector('#askForm');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const question = document.querySelector('#question').value.trim();
  const found = examples.find(item => item.test.test(question));
  const result = found || { title: 'How to structure your answer', text: 'Start with a one-sentence definition. Then explain how it works, give one real example, and mention a relevant trade-off or best practice. This structure keeps an interview answer clear, complete, and easy to follow.' };
  document.querySelector('#answerText').innerHTML = `<h3>${result.title}</h3><p>${result.text}</p>`;
  document.querySelector('#demoAnswer').hidden = false;
  document.querySelector('#demoAnswer').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
document.querySelector('#themeToggle')?.addEventListener('click', () => document.body.classList.toggle('light'));
let deferredPrompt;
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredPrompt = event; document.querySelector('#installButton').hidden = false; });
document.querySelector('#installButton')?.addEventListener('click', async () => { if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; document.querySelector('#installButton').hidden = true; });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
