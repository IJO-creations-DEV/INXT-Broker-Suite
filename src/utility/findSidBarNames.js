const findNamesByPath = (logs, path, result = [], currentNames = []) => {
  logs?.forEach((dat) => {
    // Push the current name to the array for the current level
    currentNames.push(dat.name);

    if (Array.isArray(dat?.submenu) === true) {
      findNamesByPath(dat.submenu, path, result, currentNames);
    } else {
      if (dat.includes.includes(path.replace(/\d+/g, ""))) {
        // If the path includes the given path, push the accumulated names to the result array
        result.push(...currentNames);
      }
    }

    // Pop the last name to backtrack when moving up to the parent level
    currentNames.pop();
  });
  console.log(result, "find result in route names");
  return result;
};

export default findNamesByPath;
