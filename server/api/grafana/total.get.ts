export default eventHandler(async () => {
    const res = await $fetch('https://snapshots.raintank.io/api/snapshots/dbOMQ5nqs6y5ts8Ci9xC8apmqOfM4TN7');
    const value = res?.dashboard?.panels?.[0]?.snapshotData?.[0]?.fields?.[0]?.values?.[0] ?? null;

    return value;
});
