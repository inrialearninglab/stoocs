import { toast } from 'vue-sonner';
import html2canvas from 'html2canvas';

export function saveChartAsPNG(id: string) {
    const graph = document.getElementById(id) as HTMLElement;
    if (!graph) {
        toast.error("Erreur durant la capture d'écran");

        return;
    }

    html2canvas(graph).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${id}.png`;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    });

    toast.success("Capture d'écran réalisé avec succès");
}
