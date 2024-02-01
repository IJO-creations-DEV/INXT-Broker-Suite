const findNamesByPath = (logs, path, result = [], currentNames = []) => {
    logs?.forEach((dat) => {
        // Push the current name to the array for the current level
        currentNames.push(dat.name);

        if (Array.isArray(dat?.submenu) === true) {
            findNamesByPath(dat.submenu, path, result, currentNames);
        } else {
            if (dat.path === path) {
                // If the path matches, push the accumulated names to the result array
                result.push(...currentNames);
            }
        }

        // Pop the last name to backtrack when moving up to the parent level
        currentNames.pop();
    });
    return result;
};

export default findNamesByPath
// const pathToFind = "/master/generals/organization/branchmaster";
// const resultArray = findNamesByPath(da, pathToFind);

// console.log(resultArray);
