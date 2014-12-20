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

	v = v.replace(/\bGamergate\b/g, "Jabroni");
	v = v.replace(/\bGamergaters\b/g, "Jabronis");
	v = v.replace(/\bgamergate\b/g, "jabroni");
	v = v.replace(/\bgamergaters\b/g, "jabronis");
	v = v.replace(/\bGamerGate\b/g, "Jabroni");
	v = v.replace(/\bGAMERGATE\b/g\b/g, "Jabroni");
	v = v.replace(/\bGamerGaters\b/g, "Jabronis");
	
	textNode.nodeValue = v;
}


