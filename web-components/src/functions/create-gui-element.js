// Import components.
import { ButtonComponent } from '@bagatell/core/src/components/ButtonComponent'
import { EnterNumberComponent } from '@bagatell/core/src/components/EnterNumberComponent'
import { EnterTextComponent } from '@bagatell/core/src/components/EnterTextComponent'
import { ImageComponent } from '@bagatell/core/src/components/ImageComponent'
import { SliderComponent } from '@bagatell/core/src/components/SliderComponent'
import { TextComponent } from '@bagatell/core/src/components/TextComponent'
import { TimerComponent } from '@bagatell/core/src/components/TimerComponent'
import { ColsComponent } from '@bagatell/core/src/components/ColsComponent'
import { LayersComponent } from '@bagatell/core/src/components/LayersComponent'
import { RowsComponent } from '@bagatell/core/src/components/RowsComponent'
import { SpaceComponent } from '@bagatell/core/src/components/SpaceComponent'

// Import elements.
import ButtonElement from '../elements/components/ButtonElement'
import EnterNumberElement from '../elements/components/EnterNumberElement'
import EnterTextElement from '../elements/components/EnterTextElement'
import ImageElement from '../elements/components/ImageElement'
import SliderElement from '../elements/components/SliderElement'
import TextElement from '../elements/components/TextElement'
import TimerElement from '../elements/components/TimerElement'
import ColsElement from '../elements/components/ColsElement'
import LayersElement from '../elements/components/LayersElement'
import RowsElement from '../elements/components/RowsElement'
import SpaceElement from '../elements/components/SpaceElement'

export function createGuiElement(guiComponent){
	
	if(guiComponent instanceof ButtonComponent){
		return new ButtonElement()
	}else if(guiComponent instanceof EnterNumberComponent){
		return new EnterNumberElement()
	}else if(guiComponent instanceof EnterTextComponent){
		return new EnterTextElement()
	}else if(guiComponent instanceof ImageComponent){
		return new ImageElement()
	}else if(guiComponent instanceof SliderComponent){
		return new SliderElement()
	}else if(guiComponent instanceof TextComponent){
		return new TextElement()
	}else if(guiComponent instanceof TimerComponent){
		return new TimerElement()
	}else if(guiComponent instanceof ColsComponent){
		return new ColsElement()
	}else if(guiComponent instanceof LayersComponent){
		return new LayersElement()
	}else if(guiComponent instanceof RowsComponent){
		return new RowsElement()
	}else if(guiComponent instanceof SpaceComponent){
		return new SpaceElement()
	}
	
}