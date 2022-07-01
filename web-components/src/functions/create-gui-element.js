// Import components.
import { ButtonComponent } from '@bagatell/core/src/components/ButtonComponent.js'
import { EnterNumberComponent } from '@bagatell/core/src/components/EnterNumberComponent.js'
import { EnterTextComponent } from '@bagatell/core/src/components/EnterTextComponent.js'
import { ImageComponent } from '@bagatell/core/src/components/ImageComponent.js'
import { SliderComponent } from '@bagatell/core/src/components/SliderComponent.js'
import { TextComponent } from '@bagatell/core/src/components/TextComponent.js'
import { TimerComponent } from '@bagatell/core/src/components/TimerComponent.js'
import { ColsComponent } from '@bagatell/core/src/components/ColsComponent.js'
import { LayersComponent } from '@bagatell/core/src/components/LayersComponent.js'
import { RowsComponent } from '@bagatell/core/src/components/RowsComponent.js'
import { SpaceComponent } from '@bagatell/core/src/components/SpaceComponent.js'

// Import elements.
import ButtonElement from '../elements/components/ButtonElement.js'
import EnterNumberElement from '../elements/components/EnterNumberElement.js'
import EnterTextElement from '../elements/components/EnterTextElement.js'
import ImageElement from '../elements/components/ImageElement.js'
import SliderElement from '../elements/components/SliderElement.js'
import TextElement from '../elements/components/TextElement.js'
import TimerElement from '../elements/components/TimerElement.js'
import ColsElement from '../elements/components/ColsElement.js'
import LayersElement from '../elements/components/LayersElement.js'
import RowsElement from '../elements/components/RowsElement.js'
import SpaceElement from '../elements/components/SpaceElement.js'

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