function phaseOfMilestone(id) {
  return Number(String(id).split(".")[0]);
}

function filterMilestonesByPhase(milestones, phaseId) {
  const n = Number(phaseId);
  if (!Array.isArray(milestones) || Number.isNaN(n)) return [];
  return milestones.filter((m) => {
    const phase = Number(m.phase ?? phaseOfMilestone(m.id));
    return phase === n;
  });
}
