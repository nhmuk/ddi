function getItem(collection, fileSlug) {
    // gets an item within the collection matching fileSlug
    const matchingPages = collection.filter((p) => {
        return p.fileSlug === fileSlug;
    });
    if (matchingPages.length === 0) {
        return null;
    } else {
        return matchingPages[0];
    }
}

function getRelatedItems(ctx, parentContent, collection) {
    // e.g. for getting all the posts (collection) associated with the digitisation team (parentContent)

    const parentParts = parentContent.split(/:(.*)/s);
    const parentType = parentParts[0]; // e.g. 'team'
    const parentSlug = parentParts[1]; // e.g. 'digitisation'

    return sortItems(collection
        .filter((p) => {
            return p.data[parentType] && p.data[parentType].includes(parentSlug);
        }), parentContent);
}


function sortItems(collection, sortKey) {
    return collection.map((p) => {
        if (p.data.order === undefined) {
            p.data.order = {};
        }
        if (p.data.order[sortKey] === undefined) {
            p.data.order[sortKey] = 9999;
        }
        return p;
    })
        .sort((a, b) => {
            return a.data.order[sortKey] - b.data.order[sortKey];
        });
}

function checkTag(tagName) {
    // exclude all the utility tags
    const EXCLUDE_TAGS = ['all', 'nav', 'featured'];
    return !(EXCLUDE_TAGS.includes(tagName) || tagName.startsWith('content:') || tagName.startsWith('featured:') || tagName.startsWith('group:'));
}

function getTags(ctx, parentContent) {
    return Object.entries(ctx.collections)
        .filter((c) => checkTag(c[0]))
        .filter((c) => {
            if (parentContent) {
                let subContent = getRelatedItems(ctx, parentContent, c[1]);
                return subContent.length > 0;
            }
            return true;
        })
        .map((c) => c[0]);
}

module.exports = {
    checkTag, getItem, getRelatedItems, getTags, sortItems
};
