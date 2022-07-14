import React from "react";
import {
	HtmlEditor,
	Inject,
	Image,
	Link,
	RichTextEditorComponent,
	Toolbar,
	QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import Header from "./../components/Header";

import { EditorData } from "../data/data/dummy";

const Editor = () => {
	return (
		<div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
			<Header category='App' title='Editor' />
			<RichTextEditorComponent>
				<EditorData />
				<Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
			</RichTextEditorComponent>
		</div>
	);
};

export default Editor;
