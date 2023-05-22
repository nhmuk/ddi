$(() => {
  const containers = Object.values($('.cards-container')).slice(0, -1).map($);
  containers.forEach((c) => {
    let cards = Object.values(c.find('.card-block')).slice(0, -1).map($);
    let maxHeight = cards
      .map((x) => x.height())
      .reduce((a, b) => Math.max(a, b), -Infinity);
    cards.forEach((c) => {
      c.height(maxHeight);
    });
  });
});
