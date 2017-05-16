## Flatten an JS object

```js
flattenObj('', { a: { b: { c: { d: 'xxxx' }}, e: 'yyyy' }});
//=> { 'a.b.c.d': 'xxxx', 'a.e': 'yyyy' }
```


## Flatten a JSON file

Assume `a.js` have the following content:

```json
{
	"A": {
		"C": {
			"D": [ "x", "y", "z" ],
			"E": [ 1, 2, 3 ]
		}
	},
	"B": "z"
}
```

```sh
node flattenJSON.js /tmp/a.json
```
or

```sh
cat /tmp/a.json | node flattenJSON.js
```

The result is:
```
A.C.D: "x","y","z"
A.C.E: 1,2,3
B: "z"
```

