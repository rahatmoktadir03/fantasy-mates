export const calculateStats = (crewmates) => {
  const attributeCounts = {};
  let total = 0;

  crewmates.forEach((c) => {
    c.attributes.forEach((attr) => {
      attributeCounts[attr] = (attributeCounts[attr] || 0) + 1;
      total += 1;
    });
  });

  const percentages = {};
  for (const attr in attributeCounts) {
    percentages[attr] = ((attributeCounts[attr] / total) * 100).toFixed(1);
  }

  return percentages;
};
