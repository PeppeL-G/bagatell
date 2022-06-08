// Fundamental classes
export { App } from './classes/App'
export { Direction } from './classes/Direction'
export { FrameworkApp } from './classes/FrameworkApp'
export { Page } from './classes/Page'

// Functions
export { createFrameworkApp } from './functions/create-framework-app'

// Components
import { createComponentCreator } from './functions/create-component-creator'

import {ButtonComponent} from './components/ButtonComponent'
export const Button = createComponentCreator(ButtonComponent)

import {EnterTextComponent} from './components/EnterTextComponent'
export const EnterText = createComponentCreator(EnterTextComponent)

import {EnterNumberComponent} from './components/EnterNumberComponent'
export const EnterNumber = createComponentCreator(EnterNumberComponent)

import {ImageComponent} from './components/ImageComponent'
export const Image = createComponentCreator(ImageComponent)

import {SliderComponent} from './components/SliderComponent'
export const Slider = createComponentCreator(SliderComponent)

import {TextComponent} from './components/TextComponent'
export const Text = createComponentCreator(TextComponent)

import {TimerComponent} from './components/TimerComponent'
export const Timer = createComponentCreator(TimerComponent)

import {ColsComponent} from './components/ColsComponent'
export const Cols = createComponentCreator(ColsComponent)

import {LayersComponent} from './components/LayersComponent'
export const Layers = createComponentCreator(LayersComponent)

import {RowsComponent} from './components/RowsComponent'
export const Rows = createComponentCreator(RowsComponent)

import {SpaceComponent} from './components/SpaceComponent'
export const Space = createComponentCreator(SpaceComponent)