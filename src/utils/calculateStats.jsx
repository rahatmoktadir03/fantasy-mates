export function calculateStats(crewmates) {
  const countByCat = {};
  let totalAttrs = 0;
  const attrCounts = {};

  crewmates.forEach((c) => {
    countByCat[c.category] = (countByCat[c.category] || 0) + 1;
    c.attributes.forEach((a) => {
      attrCounts[a] = (attrCounts[a] || 0) + 1;
      totalAttrs++;
    });
  });

  // overall “power” = total attributes selected / crewmate count
  const power = crewmates.length
    ? Math.round((totalAttrs / crewmates.length) * 10)
    : 0;

  return { countByCat, attrCounts, power };
}
