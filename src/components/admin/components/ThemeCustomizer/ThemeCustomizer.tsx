import { ThemeSettings } from '@/contexts'
import LayoutWidth from './LayoutWidth'
import useThemeCustomizer from './useThemeCustomizer'

const ThemeCustomizer = () => {
	const {
		layoutWidth,
		handleChangeLayoutWidth,
	} = useThemeCustomizer()
	return (
		<div className="p-3">

			<LayoutWidth
				handleChangeLayoutWidth={handleChangeLayoutWidth}
				layoutWidth={layoutWidth}
				layoutConstants={ThemeSettings.layout.mode}
			/>
		</div>
	)
}

export default ThemeCustomizer
