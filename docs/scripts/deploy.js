import child_process from 'child_process'

const commands = [
	
	// Build it.
	'npm run build',
	
	// Commit it.
	'cd src/.vitepress/dist',
	'git init',
	'git add -A',
	'git commit -m "New deploy."',
	
	// Push it.
	'git push -f https://github.com/PeppeL-G/bagatell.git master:gh-pages',
	
	// Remove build.
	'cd ..',
	'rm -rf dist/',
	
]

// Execute all commands.
const output = child_process.execSync(commands.join(' && '))
console.log(output.toString('utf8'))