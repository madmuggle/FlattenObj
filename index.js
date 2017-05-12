/**
 * flattenObjRecursive('', { a: { b: { c: { d: 'xxxx' }}, e: 'yyyy' }});
 * //=> { '.a.b.c.d': 'xxxx', '.a.e': 'yyyy' }
 *
 */
function flattenObjRecursive(idx, obj) {
	const result = {};
	for (var x in obj) {
		if (typeof obj[x] === 'object')
			Object.assign(result, flattenObjRecursive(`${idx}.${x}`, obj[x]));
		else
			result[`${idx}.${x}`] = obj[x];
	}
	return result;
}

/**
 * flattenObj('', { a: { b: { c: { d: 'xxxx' }}, e: 'yyyy' }});
 * //=> { 'a.b.c.d': 'xxxx', 'a.e': 'yyyy' }
 *
 */
function flattenObj(obj) {
	const rawData = flattenObjRecursive('', obj);
	const result = {};
	for (var x in rawData) result[x.slice(1)] = rawData[x];
	return result;
}


module.exports = flattenObj;

