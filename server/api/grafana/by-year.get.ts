export default eventHandler(async () => {
    const res = await $fetch('https://snapshots.raintank.io/api/snapshots/PqXJhDuriXu4O5sNhMP0QdPlZSfTX2nX');
    const panel = res.dashboard.panels[0];
    const fields = panel.snapshotData[0].fields;

    const years = fields.find((f) => f.name === 'year')?.values || [];
    const values = fields.find((f) => f.name === 'total_inscriptions')?.values || [];

    return years.map((year, i) => ({
        year,
        value: values[i],
    }));
});
