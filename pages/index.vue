<template>
    <div class="flex flex-col gap-5">
        <div class="flex gap-3">
            <ProgressCard title="Actifs" description="Utilisateur ayant répondu à au moins une question" :percentage="20" />
        </div>
        <MoocEnrollments />
        <MoocInterestChart />
    </div>
</template>