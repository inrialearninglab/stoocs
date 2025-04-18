import { toast } from 'vue-sonner';
import { toPng } from 'html-to-image';

export function saveChartAsPNG(
    id: string,
    moocName: string,
    sessionName: string,
    date: string,
    graphTitle: string,
    graphDescription: string,
) {
    const chart = document.getElementById(id) as HTMLElement;
    const legend = document.getElementById(`${id}-legend`);
    if (!chart) {
        toast.error("Erreur durant la capture d'écran");
        return;
    }

    const graph = document.createElement('div');
    const context = document.createElement('h4');
    context.innerHTML = `Mooc ${moocName} ${sessionName} (données extraites le ${date})`;
    context.style.textAlign = 'center';
    context.style.color = 'black';

    const title = document.createElement('p');
    title.innerHTML = `<strong>${graphTitle}</strong>`;
    title.style.textAlign = 'center';
    title.style.color = 'black';

    const description = document.createElement('p');
    description.innerHTML = graphDescription;
    description.style.textAlign = 'center';
    description.style.color = 'black';

    graph.appendChild(context);
    graph.appendChild(title);
    graph.appendChild(description);
    if (legend) graph.appendChild(legend.cloneNode(true));
    graph.appendChild(chart.cloneNode(true));

    graph.style.position = 'absolute';
    graph.style.top = '0';
    graph.style.left = '0';
    graph.style.zIndex = '-9999';
    graph.style.background = '#fff';
    graph.style.padding = '1rem';

    document.body.appendChild(graph);

    toPng(graph)
        .then((dataUrl) => {
            const image = new Image();
            image.src = dataUrl;
            console.log(image);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `${id}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            document.body.removeChild(graph);
        })
        .catch((error) => {
            console.error('error during screenshot');
            toast.error("Erreur durant la capture d'écran");
        });
}
