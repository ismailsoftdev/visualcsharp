document.addEventListener('DOMContentLoaded', () => {
    // Fetch the list of Markdown files in the documentation folder
    fetch('documentation-list.json')
        .then(response => response.json())
        .then(data => {
            const sidebar = document.getElementById('sidebar');

            // Populate the sidebar with links to each section
            // biome-ignore lint/complexity/noForEach: <explanation>
            data.forEach(section => {

                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${section.slug}`;
                link.textContent = section.title;

                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    loadMarkdown(section.slug);
                });

                listItem.appendChild(link);
                sidebar.appendChild(listItem);
            });
        });
});

