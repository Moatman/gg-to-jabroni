walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bGamergate\b/g, "Jabronis");
	v = v.replace(/\bGamergaters\b/g, "Jabronis");
	v = v.replace(/\bgamergate\b/g, "jabronis");
	v = v.replace(/\bgamergaters\b/g, "jabronis");
	v = v.replace(/\bGamerGate\b/g, "Jabronis");
	v = v.replace(/\bGamergater\b/g, "Jabroni");
	v = v.replace(/\bGamerGater\b/g, "Jabroni");
	v = v.replace(/\bgamergater\b/g, "jabroni");

	
	textNode.nodeValue = v;
}


