import { dracula, CopyBlock, atomOneLight } from 'react-code-blocks'

const CodeSnippet = props => {
	return (
		<div style={{ fontFamily: 'JetBrains Mono', fontSize: '14px' }}>
			<CopyBlock
				text={props.code}
				language='bash'
				showLineNumbers={false}
				theme={props.theme === 'light' ? atomOneLight : dracula}
				wrapLongLines={true}
				codeBlock
			/>
		</div>
	)
}

export default CodeSnippet
