/**
 * flattenObjRecursive('', { a: { b: { c: { d: 'xxxx' }}, e: 'yyyy' }});
 * //=> { '.a.b.c.d': 'xxxx', '.a.e': 'yyyy' }
 *
 */
function flattenObjRecursive(idx, obj) {
	const result = {};
	for (var x in obj) {
		if (checkObject(obj[x]))
			Object.assign(result, flattenObjRecursive(`${idx}.${x}`, obj[x]));
		else
			result[`${idx}.${x}`] = stringify(obj[x]);
	}
	return result;
}

function checkObject(obj) {
	return typeof obj === 'object' && obj.constructor !== Array;
}

function stringify(obj) {
	if (Array.isArray(obj))
		return obj.map(JSON.stringify).join(",");
	else
		return JSON.stringify(obj);
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

