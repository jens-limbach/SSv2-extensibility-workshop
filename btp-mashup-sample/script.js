document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-button');
    
    buttons.forEach(button => {
    button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.textContent = content.style.display === 'block' ? 'Click to collapse' : 'Click to expand';
    });
    });
    });

  
const projects = [
{
id: 1,
name: 'Project Alpha',
milestones: [
{ id: 1, name: 'Alpha Milestone 1', start: '2023-01-01', end: '2023-01-15' },
{ id: 2, name: 'Alpha Milestone 2', start: '2023-01-16', end: '2023-01-30' }
]
},
{
id: 2,
name: 'Project Beta',
milestones: [
{ id: 3, name: 'Beta Milestone 1', start: '2023-02-01', end: '2023-02-10' },
{ id: 4, name: 'Beta Milestone 2', start: '2023-02-12', end: '2023-02-20' }
]
},
{
id: 3,
name: 'Project Gamma',
milestones: [
{ id: 5, name: 'Gamma Milestone 1', start: '2023-03-01', end: '2023-03-05' },
{ id: 6, name: 'Gamma Milestone 2', start: '2023-03-06', end: '2023-03-15' }
]
}
];

function selectProject(projectId) {
const project = projects.find(p => p.id === projectId);
const milestonesTableBody = document.getElementById('milestones-table').querySelector('tbody');
const ganttChart = document.getElementById('gantt-chart');

// Clear the existing milestones and gantt chart
milestonesTableBody.innerHTML = '';
ganttChart.innerHTML = '';

// Date variables for scaling
const projectStart = new Date(project.milestones[0].start);
const projectEnd = new Date(project.milestones[project.milestones.length - 1].end);
const totalDays = (projectEnd - projectStart) / (1000 * 60 * 60 * 24);

// Populate milestones table
project.milestones.forEach(milestone => {
const row = `<tr>
<td>${milestone.id}</td>
<td>${milestone.name}</td>
<td>${milestone.start}</td>
<td>${milestone.end}</td>
</tr>`;
milestonesTableBody.innerHTML += row;
});

// Populate Gantt chart
project.milestones.forEach(milestone => {
const startDate = new Date(milestone.start);
const endDate = new Date(milestone.end);
const duration = (endDate - startDate) / (1000 * 60 * 60 * 24);
const offset = (startDate - projectStart) / (1000 * 60 * 60 * 24);

const bar = document.createElement('div');
bar.className = 'gantt-bar';
bar.style.width = `${(duration / totalDays) * 100}%`;
bar.style.left = `${(offset / totalDays) * 100}%`;
bar.style.top = `${30 * milestone.id}px`; // Adjust spacing between bars
bar.innerHTML = `<span>${milestone.name}</span>`;

ganttChart.appendChild(bar);
});

// Create timeline
const timeline = document.createElement('div');
timeline.className = 'timeline';
for (let i = 0; i <= totalDays; i += Math.max(1, Math.floor(totalDays / 10))) {
const timelineMark = document.createElement('div');
timeline.appendChild(timelineMark);
}
ganttChart.appendChild(timeline);
}


