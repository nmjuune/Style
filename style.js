class Style {

    'use strict';

    constructor ( DOMElement, CSSpropertyObj ) {

        this.element;

        if ( (typeof DOMElement === 'string') || (DOMElement instanceof String) ) {
            this.element = document.querySelector(DOMElement);
        } else {
            this.element = DOMElement;
        }


        if ( CSSpropertyObj ) {
            if ( CSSpropertyObj.width )this.width( CSSpropertyObj.width );
            if ( CSSpropertyObj.maxWidth )this.maxWidth( CSSpropertyObj.maxWidth );
            if ( CSSpropertyObj.minWidth )this.minWidth( CSSpropertyObj.minWidth );
            if ( CSSpropertyObj.height )this.height( CSSpropertyObj.height );
            if ( CSSpropertyObj.maxHeight )this.maxHeight( CSSpropertyObj.maxHeight );
            if ( CSSpropertyObj.minHeight )this.minHeight( CSSpropertyObj.minHeight );
            if ( CSSpropertyObj.margin )this.margin( CSSpropertyObj.margin );
            if ( CSSpropertyObj.marginTop )this.marginTop( CSSpropertyObj.marginTop );
            if ( CSSpropertyObj.marginRight )this.marginRight( CSSpropertyObj.marginRight );
            if ( CSSpropertyObj.marginBottom )this.marginBottom( CSSpropertyObj.marginBottom );
            if ( CSSpropertyObj.marginLeft )this.marginLeft( CSSpropertyObj.marginLeft );
            if ( CSSpropertyObj.padding )this.padding( CSSpropertyObj.padding );
            if ( CSSpropertyObj.paddingTop )this.paddingTop( CSSpropertyObj.paddingTop );
            if ( CSSpropertyObj.paddingRight )this.paddingRight( CSSpropertyObj.paddingRight );
            if ( CSSpropertyObj.paddingBottom )this.paddingBottom( CSSpropertyObj.paddingBottom );
            if ( CSSpropertyObj.paddingLeft )this.paddingLeft( CSSpropertyObj.paddingLeft );
            if ( CSSpropertyObj.display )this.display( CSSpropertyObj.display );
            if ( CSSpropertyObj.position )this.position( CSSpropertyObj.position );
            if ( CSSpropertyObj.top )this.top( CSSpropertyObj.top );
            if ( CSSpropertyObj.left )this.left( CSSpropertyObj.left );
            if ( CSSpropertyObj.bottom )this.bottom( CSSpropertyObj.bottom );
            if ( CSSpropertyObj.right )this.right( CSSpropertyObj.right );
            if ( CSSpropertyObj.alignContent )this.alignContent( CSSpropertyObj.alignContent );
            if ( CSSpropertyObj.alignItems )this.alignItems( CSSpropertyObj.alignItems );
            if ( CSSpropertyObj.alignSelf )this.alignSelf( CSSpropertyObj.alignSelf );
            if ( CSSpropertyObj.flex )this.flex( CSSpropertyObj.flex );
            if ( CSSpropertyObj.flexBasis )this.flexBasis( CSSpropertyObj.flexBasis );
            if ( CSSpropertyObj.flexDirection )this.flexDirection( CSSpropertyObj.flexDirection );
            if ( CSSpropertyObj.flexFlow )this.flexFlow( CSSpropertyObj.flexFlow )
            if ( CSSpropertyObj.flexGrow )this.flexGrow( CSSpropertyObj.flexGrow );
            if ( CSSpropertyObj.flexShrink )this.flexShrink( CSSpropertyObj.flexShrink );
            if ( CSSpropertyObj.flexWrap )this.flexWrap( CSSpropertyObj.flexWrap );
            if ( CSSpropertyObj.justifyContent )this.justifyContent( CSSpropertyObj.justifyContent );
            if ( CSSpropertyObj.order )this.order( CSSpropertyObj.order );
            if ( CSSpropertyObj.alignmentBaseline )this.alignmentBaseline( CSSpropertyObj.alignmentBaseline );
            if ( CSSpropertyObj.animation )this.animation( CSSpropertyObj.animation );
            if ( CSSpropertyObj.animationDelay )this.animationDelay( CSSpropertyObj.animationDelay );
            if ( CSSpropertyObj.animationDirection )this.animationDirection( CSSpropertyObj.animationDirection );
            if ( CSSpropertyObj.animationDuration)this.animationDuration( CSSpropertyObj.animationDuration );
            if ( CSSpropertyObj.animationFillMode )this.animationFillMode( CSSpropertyObj.animationFillMode );
            if ( CSSpropertyObj.animationIterationCount )this.animationIterationCount( CSSpropertyObj.animationIterationCount );
            if ( CSSpropertyObj.animationName )this.animationName( CSSpropertyObj.animationName );
            if ( CSSpropertyObj.animationPlayState )this.animationPlayState( CSSpropertyObj.animationPlayState );
            if ( CSSpropertyObj.animationTimingFunction )this.animationTimingFunction( CSSpropertyObj.animationTimingFunction );
            if ( CSSpropertyObj.backfaceVisibility )this.backfaceVisibility( CSSpropertyObj.backfaceVisibility );
            if ( CSSpropertyObj.perspective )this.perspective( CSSpropertyObj.perspective );
            if ( CSSpropertyObj.perspectiveOrigin )this.perspectiveOrigin( CSSpropertyObj.perspectiveOrigin );
            if ( CSSpropertyObj.transform )this.transform( CSSpropertyObj.transform );
            if ( CSSpropertyObj.transformOrigin )this.transformOrigin( CSSpropertyObj.transformOrigin );
            if ( CSSpropertyObj.transformStyle )this.transformStyle( CSSpropertyObj.transformStyle );
            if ( CSSpropertyObj.transition )this.transition( CSSpropertyObj.transition );
            if ( CSSpropertyObj.transitionDelay )this.transitionDelay( CSSpropertyObj.transitionDelay );
            if ( CSSpropertyObj.transitionDuration )this.transitionDuration( CSSpropertyObj.transitionDuration );
            if ( CSSpropertyObj.transitionProperty )this.transitionProperty( CSSpropertyObj.transitionProperty );
            if ( CSSpropertyObj.transitionTimingFunction )this.transitionTimingFunction( CSSpropertyObj.transitionTimingFunction );
            if ( CSSpropertyObj.background )this.background( CSSpropertyObj.background );
            if ( CSSpropertyObj.backgroundAttachment )this.backgroundAttachment( CSSpropertyObj.backgroundAttachment );
            if ( CSSpropertyObj.backgroundColor )this.backgroundColor( CSSpropertyObj.backgroundColor );
            if ( CSSpropertyObj.backgroundBlendMode )this.backgroundBlendMode( CSSpropertyObj.backgroundBlendMode );
            if ( CSSpropertyObj.backgroundImage )this.backgroundImage( CSSpropertyObj.backgroundImage );
            if ( CSSpropertyObj.backgroundOrigin )this.backgroundOrigin( CSSpropertyObj.backgroundOrigin );
            if ( CSSpropertyObj.backgroundPosition )this.backgroundPosition( CSSpropertyObj.backgroundPosition );
            if ( CSSpropertyObj.backgroundRepeat )this.backgroundRepeat( CSSpropertyObj.backgroundRepeat );
            if ( CSSpropertyObj.backgroundSize )this.backgroundSize( CSSpropertyObj.backgroundSize );
            if ( CSSpropertyObj.border )this.border( CSSpropertyObj.border );
            if ( CSSpropertyObj.borderCollapse )this.borderCollapse( CSSpropertyObj.borderCollapse );
            if ( CSSpropertyObj.borderColor )this.borderColor( CSSpropertyObj.borderColor );
            if ( CSSpropertyObj.borderSpacing )this.borderSpacing( CSSpropertyObj.borderSpacing );
            if ( CSSpropertyObj.borderImage )this.borderImage( CSSpropertyObj.borderImage );
            if ( CSSpropertyObj.borderImageOutset )this.borderImageOutset( CSSpropertyObj.borderImageOutset );
            if ( CSSpropertyObj.borderImageRepeat )this.borderImageRepeat( CSSpropertyObj.borderImageRepeat );
            if ( CSSpropertyObj.borderImageSlice )this.borderImageSlice( CSSpropertyObj.borderImageSlice );
            if ( CSSpropertyObj.borderImageSource )this.borderImageSource( CSSpropertyObj.borderImageSource );
            if ( CSSpropertyObj.borderImageWidth )this.borderImageWidth( CSSpropertyObj.borderImageWidth );
            if ( CSSpropertyObj.borderRadius )this.borderRadius( CSSpropertyObj.borderRadius );
            if ( CSSpropertyObj.borderTopLeftRadius )this.borderTopLeftRadius( CSSpropertyObj.borderTopLeftRadius );
            if ( CSSpropertyObj.borderTopRightRadius )this.borderTopRightRadius( CSSpropertyObj.borderTopRightRadius );
            if ( CSSpropertyObj.borderBottomLeftRadius )this.borderBottomLeftRadius( CSSpropertyObj.borderBottomLeftRadius );
            if ( CSSpropertyObj.borderBottomRightRadius )this.borderBottomRightRadius( CSSpropertyObj.borderBottomRightRadius );
            if ( CSSpropertyObj.borderStyle )this.borderStyle( CSSpropertyObj.borderStyle );
            if ( CSSpropertyObj.borderTop )this.borderTop( CSSpropertyObj.borderTop );
            if ( CSSpropertyObj.borderRight )this.borderRight( CSSpropertyObj.borderRight );
            if ( CSSpropertyObj.borderBottom )this.borderBottom( CSSpropertyObj.borderBottom );
            if ( CSSpropertyObj.borderLeft )this.borderLeft( CSSpropertyObj.borderLeft );
            if ( CSSpropertyObj.borderTopColor )this.borderTopColor( CSSpropertyObj.borderTopColor );
            if ( CSSpropertyObj.borderRightColor )this.borderRightColor( CSSpropertyObj.borderRightColor );
            if ( CSSpropertyObj.borderBottomColor )this.borderBottomColor( CSSpropertyObj.borderBottomColor );
            if ( CSSpropertyObj.borderLeftColor )this.borderLeftColor( CSSpropertyObj.borderLeftColor );
            if ( CSSpropertyObj.borderTopStyle )this.borderTopStyle( CSSpropertyObj.borderTopStyle );
            if ( CSSpropertyObj.borderRightStyle )this.borderRightStyle( CSSpropertyObj.borderRightStyle );
            if ( CSSpropertyObj.borderBottomStyle )this.borderBottomStyle( CSSpropertyObj.borderBottomStyle );
            if ( CSSpropertyObj.borderLeftStyle )this.borderLeftStyle( CSSpropertyObj.borderLeftStyle );
            if ( CSSpropertyObj.borderTopWidth )this.borderTopWidth( CSSpropertyObj.borderTopWidth );
            if ( CSSpropertyObj.borderRightWidth )this.borderRightWidth( CSSpropertyObj.borderRightWidth );
            if ( CSSpropertyObj.borderBottomWidth )this.borderBottomWidth( CSSpropertyObj.borderBottomWidth );
            if ( CSSpropertyObj.borderLeftWidth )this.borderLeftWidth( CSSpropertyObj.borderLeftWidth );
            if ( CSSpropertyObj.borderWidth )this.borderWidth( CSSpropertyObj.borderWidth );
            if ( CSSpropertyObj.boxShadow )this.boxShadow( CSSpropertyObj.boxShadow );
            if ( CSSpropertyObj.boxSizing )this.boxSizing( CSSpropertyObj.boxSizing );
            if ( CSSpropertyObj.breakAfter )this.breakAfter( CSSpropertyObj.breakAfter );
            if ( CSSpropertyObj.breakBefore )this.breakBefore( CSSpropertyObj.breakBefore );
            if ( CSSpropertyObj.breakInside )this.breakInside( CSSpropertyObj.breakInside );
            if ( CSSpropertyObj.captionSide )this.captionSide( CSSpropertyObj.captionSide );
            if ( CSSpropertyObj.clear )this.clear( CSSpropertyObj.clear );
            if ( CSSpropertyObj.clip )this.clip( CSSpropertyObj.clip );
            if ( CSSpropertyObj.clipPath )this.clipPath( CSSpropertyObj.clipPath );
            if ( CSSpropertyObj.color )this.color( CSSpropertyObj.color );
            if ( CSSpropertyObj.columnCount )this.columnCount( CSSpropertyObj.columnCount );
            if ( CSSpropertyObj.columnFill )this.columnFill( CSSpropertyObj.columnFill );
            if ( CSSpropertyObj.columnGap )this.columnGap( CSSpropertyObj.columnGap );
            if ( CSSpropertyObj.columnRule )this.columnRule( CSSpropertyObj.columnRule );
            if ( CSSpropertyObj.columnRuleColor )this.columnRuleColor( CSSpropertyObj.columnRuleColor );
            if ( CSSpropertyObj.columnRuleStyle )this.columnRuleStyle( CSSpropertyObj.columnRuleStyle );
            if ( CSSpropertyObj.columnRuleWidth )this.columnRuleWidth( CSSpropertyObj.columnRuleWidth );
            if ( CSSpropertyObj.columns )this.columns( CSSpropertyObj.columns );
            if ( CSSpropertyObj.columnSpan )this.columnSpan( CSSpropertyObj.columnSpan );
            if ( CSSpropertyObj.columnWidth )this.columnWidth( CSSpropertyObj.columnWidth );
            if ( CSSpropertyObj.content )this.content( CSSpropertyObj.content );
            if ( CSSpropertyObj.counterIncrement )this.counterIncrement( CSSpropertyObj.counterIncrement );
            if ( CSSpropertyObj.counterReset )this.counterReset( CSSpropertyObj.counterReset );
            if ( CSSpropertyObj.cursor )this.cursor( CSSpropertyObj.cursor );
            if ( CSSpropertyObj.direction )this.direction( CSSpropertyObj.direction );
            if ( CSSpropertyObj.dominantBaseline )this.dominantBaseline( CSSpropertyObj.dominantBaseline );
            if ( CSSpropertyObj.emptyCells )this.emptyCells( CSSpropertyObj.emptyCells );
            if ( CSSpropertyObj.filter )this.filter( CSSpropertyObj.filter );
            if ( CSSpropertyObj.float )this.float( CSSpropertyObj.float );
            if ( CSSpropertyObj.font )this.font( CSSpropertyObj.font );
            if ( CSSpropertyObj.fontFamily )this.fontFamily( CSSpropertyObj.fontFamily );
            if ( CSSpropertyObj.fontFeatureSettings )this.fontFeatureSettings( CSSpropertyObj.fontFeatureSettings );
            if ( CSSpropertyObj.fontKerning )this.fontKerning( CSSpropertyObj.fontKerning );
            if ( CSSpropertyObj.fontLanguageOverride )this.fontLanguageOverride( CSSpropertyObj.fontLanguageOverride );
            if ( CSSpropertyObj.fontSize )this.fontSize( CSSpropertyObj.fontSize );
            if ( CSSpropertyObj.fontSizeAdjust )this.fontSizeAdjust( CSSpropertyObj.fontSizeAdjust );
            if ( CSSpropertyObj.fontStretch )this.fontStretch( CSSpropertyObj.fontStretch );
            if ( CSSpropertyObj.fontStyle )this.fontStyle( CSSpropertyObj.fontStyle );
            if ( CSSpropertyObj.fontSynthesis )this.fontSynthesis( CSSpropertyObj.fontSynthesis );
            if ( CSSpropertyObj.fontVariant )this.fontVariant( CSSpropertyObj.fontVariant );
            if ( CSSpropertyObj.fontVariantAlternates )this.fontVariantAlternates( CSSpropertyObj.fontVariantAlternates );
            if ( CSSpropertyObj.fontVariantCaps )this.fontVariantCaps( CSSpropertyObj.fontVariantCaps );
            if ( CSSpropertyObj.fontVariantEastAsian )this.fontVariantEastAsian( CSSpropertyObj.fontVariantEastAsian );
            if ( CSSpropertyObj.fontVariantLigatures )this.fontVariantLigatures( CSSpropertyObj.fontVariantLigatures );
            if ( CSSpropertyObj.fontVariantNumeric )this.fontVariantNumeric( CSSpropertyObj.fontVariantNumeric );
            if ( CSSpropertyObj.fontVariantPosition )this.fontVariantPosition( CSSpropertyObj.fontVariantPosition );
            if ( CSSpropertyObj.fontWeight )this.fontWeight( CSSpropertyObj.fontWeight );
            if ( CSSpropertyObj.grid )this.grid( CSSpropertyObj.grid );
            if ( CSSpropertyObj.gridArea )this.gridArea( CSSpropertyObj.gridArea );
            if ( CSSpropertyObj.gridAutoColumns )this.gridAutoColumns( CSSpropertyObj.gridAutoColumns );
            if ( CSSpropertyObj.gridAutoFlow )this.gridAutoFlow( CSSpropertyObj.gridAutoFlow );
            if ( CSSpropertyObj.gridAutoRows )this.gridAutoRows( CSSpropertyObj.gridAutoRows );
            if ( CSSpropertyObj.gridColumn )this.gridColumn( CSSpropertyObj.gridColumn );
            if ( CSSpropertyObj.gridColumnEnd )this.gridColumnEnd( CSSpropertyObj.gridColumnEnd );
            if ( CSSpropertyObj.gridColumnGap )this.gridColumnGap( CSSpropertyObj.gridColumnGap );
            if ( CSSpropertyObj.gridColumnStart )this.gridColumnStart( CSSpropertyObj.gridColumnStart );
            if ( CSSpropertyObj.gridGap )this.gridGap( CSSpropertyObj.gridGap );
            if ( CSSpropertyObj.gridRow )this.gridRow( CSSpropertyObj.gridRow );
            if ( CSSpropertyObj.gridRowEnd )this.gridRowEnd( CSSpropertyObj.gridRowEnd );
            if ( CSSpropertyObj.gridRowGap )this.gridRowGap( CSSpropertyObj.gridRowGap );
            if ( CSSpropertyObj.gridRowStart )this.gridRowStart( CSSpropertyObj.gridRowStart );
            if ( CSSpropertyObj.gridTemplate )this.gridTemplate( CSSpropertyObj.gridTemplate );
            if ( CSSpropertyObj.gridTemplateAreas )this.gridTemplateAreas( CSSpropertyObj.gridTemplateAreas );
            if ( CSSpropertyObj.gridTemplateColumns )this.gridTemplateColumns( CSSpropertyObj.gridTemplateColumns );
            if ( CSSpropertyObj.gridTemplateRows )this.gridTemplateRows( CSSpropertyObj.gridTemplateRows );
            if ( CSSpropertyObj.hangingPunctuation )this.hangingPunctuation( CSSpropertyObj.hangingPunctuation );
            if ( CSSpropertyObj.hyphens )this.hyphens( CSSpropertyObj.hyphens );
            if ( CSSpropertyObj.inset )this.inset( CSSpropertyObj.inset );
            if ( CSSpropertyObj.imageOrientation )this.imageOrientation( CSSpropertyObj.imageOrientation );
            if ( CSSpropertyObj.imageRendering )this.imageRendering( CSSpropertyObj.imageRendering );
            if ( CSSpropertyObj.imageResolution )this.imageResolution( CSSpropertyObj.imageResolution );
            if ( CSSpropertyObj.justifyItems )this.justifyItems( CSSpropertyObj.justifyItems );
            if ( CSSpropertyObj.justifySelf )this.justifySelf( CSSpropertyObj.justifySelf );
            if ( CSSpropertyObj.letterSpacing )this.letterSpacing( CSSpropertyObj.letterSpacing );
            if ( CSSpropertyObj.lineBreak )this.lineBreak( CSSpropertyObj.lineBreak );
            if ( CSSpropertyObj.lineHeight )this.lineHeight( CSSpropertyObj.lineHeight );
            if ( CSSpropertyObj.listStyle )this.listStyle( CSSpropertyObj.listStyle );
            if ( CSSpropertyObj.listStyleImage )this.listStyleImage( CSSpropertyObj.listStyleImage );
            if ( CSSpropertyObj.listStylePosition )this.listStylePosition( CSSpropertyObj.listStylePosition );
            if ( CSSpropertyObj.listStyleType )this.listStyleType( CSSpropertyObj.listStyleType );
            if ( CSSpropertyObj.mixBlendMode )this.mixBlendMode( CSSpropertyObj.mixBlendMode );
            if ( CSSpropertyObj.objectFit )this.objectFit( CSSpropertyObj.objectFit );
            if ( CSSpropertyObj.objectPosition )this.objectPosition( CSSpropertyObj.objectPosition );
            if ( CSSpropertyObj.orphans )this.orphans( CSSpropertyObj.orphans );
            if ( CSSpropertyObj.outline )this.outline( CSSpropertyObj.outline );
            if ( CSSpropertyObj.outlineColor )this.outlineColor( CSSpropertyObj.outlineColor );
            if ( CSSpropertyObj.outlineOffset )this.outlineOffset( CSSpropertyObj.outlineOffset );
            if ( CSSpropertyObj.outlineStyle )this.outlineStyle( CSSpropertyObj.outlineStyle );
            if ( CSSpropertyObj.outlineWidth )this.outlineWidth( CSSpropertyObj.outlineWidth );
            if ( CSSpropertyObj.opacity )this.opacity( CSSpropertyObj.opacity );
            if ( CSSpropertyObj.overflow )this.overflow( CSSpropertyObj.overflow );
            if ( CSSpropertyObj.overflowWrap )this.overflowWrap( CSSpropertyObj.overflowWrap );
            if ( CSSpropertyObj.overflowX )this.overflowX( CSSpropertyObj.overflowX );
            if ( CSSpropertyObj.overflowY )this.overflowY( CSSpropertyObj.overflowY );
            if ( CSSpropertyObj.pageBreakAfter )this.pageBreakAfter( CSSpropertyObj.pageBreakAfter );
            if ( CSSpropertyObj.pageBreakBefore )this.pageBreakBefore( CSSpropertyObj.pageBreakBefore );
            if ( CSSpropertyObj.pageBreakInside )this.pageBreakInside( CSSpropertyObj.pageBreakInside );
            if ( CSSpropertyObj.placeItems )this.placeItems( CSSpropertyObj.placeItems );
            if ( CSSpropertyObj.pointerEvents )this.pointerEvents( CSSpropertyObj.pointerEvents );
            if ( CSSpropertyObj.quotes )this.quotes( CSSpropertyObj.quotes );
            if ( CSSpropertyObj.resize )this.resize( CSSpropertyObj.resize );
            if ( CSSpropertyObj.tabSize )this.tabSize( CSSpropertyObj.tabSize );
            if ( CSSpropertyObj.tableLayout )this.tableLayout( CSSpropertyObj.tableLayout );
            if ( CSSpropertyObj.textAlign )this.textAlign( CSSpropertyObj.textAlign );
            if ( CSSpropertyObj.textAlignLast )this.textAlignLast( CSSpropertyObj.textAlignLast );
            if ( CSSpropertyObj.textDecoration )this.textDecoration( CSSpropertyObj.textDecoration );
            if ( CSSpropertyObj.textDecorationLine )this.textDecorationLine( CSSpropertyObj.textDecorationLine );
            if ( CSSpropertyObj.textDecorationStyle )this.textDecorationStyle( CSSpropertyObj.textDecorationStyle );
            if ( CSSpropertyObj.textEmphasis )this.textEmphasis( CSSpropertyObj.textEmphasis );
            if ( CSSpropertyObj.textEmphasisColor )this.textEmphasisColor( CSSpropertyObj.textEmphasisColor );
            if ( CSSpropertyObj.textEmphasisPosition )this.textEmphasisPosition( CSSpropertyObj.textEmphasisPosition );
            if ( CSSpropertyObj.textEmphasisStyle )this.textEmphasisStyle( CSSpropertyObj.textEmphasisStyle );
            if ( CSSpropertyObj.textIndent )this.textIndent( CSSpropertyObj.textIndent );
            if ( CSSpropertyObj.textOverflow )this.textOverflow( CSSpropertyObj.textOverflow );
            if ( CSSpropertyObj.textRendering )this.textRendering( CSSpropertyObj.textRendering );
            if ( CSSpropertyObj.textShadow )this.textShadow( CSSpropertyObj.textShadow );
            if ( CSSpropertyObj.textTransform )this.textTransform( CSSpropertyObj.textTransform );
            if ( CSSpropertyObj.textUnderlinePosition )this.textUnderlinePosition( CSSpropertyObj.textUnderlinePosition );
            if ( CSSpropertyObj.unicodeBidi )this.unicodeBidi( CSSpropertyObj.unicodeBidi );
            if ( CSSpropertyObj.verticalAlign )this.verticalAlign( CSSpropertyObj.verticalAlign );
            if ( CSSpropertyObj.visibility )this.visibility( CSSpropertyObj.visibility );
            if ( CSSpropertyObj.whiteSpace )this.whiteSpace( CSSpropertyObj.whiteSpace );
            if ( CSSpropertyObj.widows )this.widows( CSSpropertyObj.widows );
            if ( CSSpropertyObj.wordBreak )this.wordBreak( CSSpropertyObj.wordBreak );
            if ( CSSpropertyObj.wordSpacing )this.wordSpacing( CSSpropertyObj.wordSpacing );
            if ( CSSpropertyObj.wordWrap )this.wordWrap( CSSpropertyObj.wordWrap );
            if ( CSSpropertyObj.writingMode )this.writingMode( CSSpropertyObj.writingMode );
            if ( CSSpropertyObj.zIndex )this.zIndex( CSSpropertyObj.zIndex );
        }

    }

    width = ( value ) => {
        if ( value ) {
            this.element.style.width = value;
        } else {
            return String(this.element.style.width);
        }
    }

    maxWidth = ( value ) => {
        if ( value ) {
            this.element.style.maxWidth = value;
        } else {
            return String(this.element.style.maxWidth);
        }
    }

    minWidth = ( value ) => {
        if ( value ) {
            this.element.style.minWidth = value;
        } else {
            return String(this.element.style.minWidth);
        }
    }

    height = ( value ) => {
        if ( value ) {
            this.element.style.height = value;
        } else {
            return String(this.element.style.height);
        }
    }

    maxHeight = ( value ) => {
        if ( value ) {
            this.element.style.maxHeight = value;
        } else {
            return String(this.element.style.maxHeight)
        }
    }

    minHeight = ( value ) => {
        if ( value ) {
            this.element.style.minHeight = value;
        } else {
            return String(this.element.style.minHeight);
        }
    }

    margin = ( value ) => {
        if ( value ) {
            this.element.style.margin = value;
        } else {
            return String(this.element.style.margin);
        }
    }

    marginTop = ( value ) => {
        if ( value ) {
            this.element.style.marginTop = value;
        } else {
            return String(this.element.style.marginTop);
        }
    }

    marginRight = ( value ) => {
        if ( value ) {
            this.element.style.marginRight = value;
        } else {
            return String(this.element.style.marginRight);
        }
    }

    marginBottom = ( value ) => {
        if ( value ) {
            this.element.style.marginBottom = value;
        } else {
            return String(this.element.style.marginBottom);
        }
    }

    marginLeft = ( value ) => {
        if ( value ) {
            this.element.style.marginLeft = value;
        } else {
            return String(this.element.style.marginLeft);
        }
    }

    marginTRBL = ( top, right, bottom, left ) => {
        let styleObj = {
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left
        };
        for ( let prop in styleObj ) {
            this.element.style[prop] = styleObj[prop];
        }
    }

    padding = ( value ) => {
        if ( value ) {
            this.element.style.padding = value;
        } else {
            return String(this.element.style.padding);
        }
    }

    paddingTop = ( value ) => {
        if ( value ) {
            this.element.style.paddingTop = value;
        } else {
            return String(this.element.style.paddingTop);
        }
    }

    paddingRight = ( value ) => {
        if ( value ) {
            this.element.style.paddingRight = value;
        } else {
            return String(this.element.style.paddingRight);
        }
    }

    paddingBottom = ( value ) => {
        if ( value ) {
            this.element.style.paddingBottom = value;
        } else {
            return String(this.element.style.paddingBottom);
        }
    }

    paddingLeft = ( value ) => {
        if ( value ) {
            this.element.style.paddingLeft = value;
        } else {
            return String(this.element.style.paddingLeft);
        }
    }

    paddingTRBL = ( top, right, bottom, left ) => {
        let styleObj = {
            paddingTop: top,
            paddingRight: right,
            paddingBottom: bottom,
            paddingLeft: left
        };
        for ( let prop in styleObj ) {
            this.element.style[prop] = styleObj[prop];
        }
    }

    display = ( value ) => {
        if ( value ) {
            this.element.style.display = value;
        } else {
            return String(this.element.style.display);
        }
    }

    displayBlock = () => {
        this.element.style.display = 'block';
    }

    displayFlex = () => {
        this.element.style.display = 'flex';
    }

    displayInlineBlock = () => {
        this.element.style.display = 'inlineBlock';
    }

    displayNone = () => {
        this.element.style.display = 'none';
    }

    position = ( value ) => {
        if ( value ) {
            this.element.style.position = value;
        } else {
            return String(this.element.style.position);
        }
    }

    top = ( value ) => {
        if ( value ) {
            this.element.style.top = value;
        } else {
            return String(this.element.style.top);
        }
    }

    left = ( value ) => {
        if ( value ) {
            this.element.style.left = value;
        } else {
            return String(this.element.style.left);
        }
    }

    bottom = ( value ) => {
        if ( value ) {
            this.element.style.bottom = value;
        } else {
            return String(this.element.style.bottom);
        }
    }

    right = ( value ) => {
        if ( value ) {
            this.element.style.right = value;
        } else {
            return String(this.element.style.right);
        }
    }

    alignContent = ( value ) => {
        if ( value ) {
            this.element.style.alignContent = value;
        } else {
            return String(this.element.style.alignContent);
        }
    }

    alignItems = ( value ) => {
        if ( value ) {
            this.element.style.alignItems = value;
        } else {
            return String(this.element.style.alignItems);
        }
    }

    alignSelf = ( value ) => {
        if ( value ) {
            this.element.style.alignSelf = value;
        } else {
            return String(this.element.style.alignSelf);
        }
    }

    flex = ( value ) => {
        if ( value ) {
            this.element.style.flex = value;
        } else {
            return String(this.element.style.flex);
        }
    }

    flexBasis = ( value ) => {
        if ( value ) {
            this.element.style.flexBasis = value;
        } else {
            return String(this.element.style.flexBasis);
        }
    }

    flexDirection = ( value ) => {
        if ( value ) {
            this.element.style.flexDirection = value;
        } else {
            return String(this.element.style.flexDirection);
        }
    }

    flexFlow = ( value ) => {
        if ( value ) {
            this.element.style.flexFlow = value;
        } else {
            return String(this.element.style.flexFlow);
        }
    }

    flexGrow = ( value ) => {
        if ( value ) {
            this.element.style.flexGrow = value;
        } else {
            return String(this.element.style.flexGrow);
        }
    }

    flexShrink = ( value ) => {
        if ( value ) {
            this.element.style.flexShrink = value;
        } else {
            return String(this.element.style.flexShrink);
        }
    }

    flexWrap = ( value ) => {
        if ( value ) {
            this.element.style.flexWrap = value;
        } else {
            return String(this.element.style.flexWrap);
        }
    }

    justifyContent = ( value ) => {
        if ( value ) {
            this.element.style.justifyContent = value;
        } else {
            return String(this.element.style.justifyContent);
        }
    }

    order = ( value ) => {
        if ( value ) {
            this.element.style.order = value;
        } else {
            return String(this.element.style.order);
        }
    }

    alignmentBaseline = ( value ) => {
        if ( value ) {
            this.element.style.alignmentBaseline = value;
        } else {
            return String(this.element.style.alignmentBaseline);
        }
    }

    animation = ( value ) => {
        if ( value ) {
            this.element.style.animation = value;
        } else {
            return String(this.element.style.animation);
        }
    }

    animationDelay = ( value ) => {
        if ( value ) {
            this.element.style.animationDelay = value;
        } else {
            return String(this.element.style.animationDelay);
        }
    }

    animationDirection = ( value ) => {
        if ( value ) {
            this.element.style.animationDirection = value;
        } else {
            return String(this.element.style.animationDirection);
        }
    }

    animationDuration = ( value ) => {
        if ( value ) {
            this.element.style.animationDuration = value;
        } else {
            return String(this.element.style.animationDuration);
        }
    }

    animationFillMode = ( value ) => {
        if ( value ) {
            this.element.style.animationFillMode = value;
        } else {
            return String(this.element.style.animationFillMode);
        }
    }

    animationIterationCount = ( value ) => {
        if ( value ) {
            this.element.style.animationIterationCount = value;
        } else {
            return String(this.element.style.animationIterationCount);
        }
    }

    animationName = ( value ) => {
        if ( value ) {
            this.element.style.animationName = value;
        } else {
            return String(this.element.style.animationName);
        }
    }

    animationPlayState = ( value ) => {
        if ( value ) {
            this.element.style.animationPlayState = value;
        } else {
            return String(this.element.style.animationPlayState);
        }
    }

    animationTimingFunction = ( value ) => {
        if ( value ) {
            this.element.style.animationTimingFunction = value;
        } else {
            return String(this.element.style.animationTimingFunction);
        }
    }

    backfaceVisibility = ( value ) => {
        if ( value ) {
            this.element.style.backfaceVisibility = value;
        } else {
            return String(this.element.style.backfaceVisibility);
        }
    }

    perspective = ( value ) => {
        if ( value ) {
            this.element.style.perspective = value;
        } else {
            return String(this.element.style.perspective);
        }
    }

    perspectiveOrigin = ( value ) => {
        if ( value ) {
            this.element.style.perspectiveOrigin = value;
        } else {
            return String(this.element.style.perspectiveOrigin);
        }
    }

    transform = ( value ) => {
        if ( value ) {
            this.element.style.transform = value;
        } else {
            return String(this.element.style.transform);
        }
    }

    transformOrigin = ( value ) => {
        if ( value ) {
            this.element.style.transformOrigin = value;
        } else {
            return String(this.element.style.transformOrigin);
        }
    }

    transformStyle = ( value ) => {
        if ( value ) {
            this.element.style.transformStyle = value;
        } else {
            return String(this.element.style.transformStyle);
        }
    }

    transition = ( value ) => {
        if ( value ) {
            this.element.style.transition = value;
        } else {
            return String(this.element.style.transition);
        }
    }

    transitionDelay = ( value ) => {
        if ( value ) {
            this.element.style.transitionDelay = value;
        } else {
            return String(this.element.style.transitionDelay);
        }
    }

    transitionDuration = ( value ) => {
        if ( value ) {
            this.element.style.transitionDuration = value;
        } else {
            return String(this.element.style.transitionDuration);
        }
    }

    transitionProperty = ( value ) => {
        if ( value ) {
            this.element.style.transitionProperty = value;
        } else {
            return String(this.element.style.transitionProperty);
        }
    }

    transitionTimingFunction = ( value ) => {
        if ( value ) {
            this.element.style.transitionTimingFunction = value;
        } else {
            return String(this.element.style.transitionTimingFunction);
        }
    }

    background = ( value ) => {
        if ( value ) {
            this.element.style.background = value;
        } else {
            return String(this.element.style.background);
        }
    }

    backgroundAttachment = ( value ) => {
        if ( value ) {
            this.element.style.backgroundAttachment = value;
        } else {
            return String(this.element.style.backgroundAttachment);
        }
    }

    backgroundColor = ( value ) => {
        if ( value ) {
            this.element.style.backgroundColor = value;
        } else {
            return String(this.element.style.backgroundColor);
        }
    }

    backgroundBlendMode = ( value ) => {
        if ( value ) {
            this.element.style.backgroundBlendMode = value;
        } else {
            return String(this.element.style.backgroundBlendMode);
        }
    }

    backgroundImage = ( value ) => {
        if ( value ) {
            this.element.style.backgroundImage = value;
        } else {
            return String(this.element.style.backgroundImage);
        }
    }

    backgroundOrigin = ( value ) => {
        if ( value ) {
            this.element.style.backgroundOrigin = value;
        } else {
            return String(this.element.style.backgroundOrigin);
        }
    }

    backgroundPosition = ( value ) => {
        if ( value ) {
            this.element.style.backgroundPosition = value;
        } else {
            return String(this.element.style.backgroundPosition);
        }
    }

    backgroundRepeat = ( value ) => {
        if ( value ) {
            this.element.style.backgroundRepeat = value;
        } else {
            return String(this.element.style.backgroundRepeat);
        }
    }

    backgroundSize = ( value ) => {
        if ( value ) {
            this.element.style.backgroundSize = value;
        } else {
            return String(this.element.style.backgroundSize);
        }
    }

    border = ( value ) => {
        if ( value ) {
            this.element.style.border = value;
        } else {
            return String(this.element.style.border);
        }
    }

    borderCollapse = ( value ) => {
        if ( value ) {
            this.element.style.borderCollapse = value;
        } else {
            return String(this.element.style.borderCollapse);
        }
    }

    borderColor = ( value ) => {
        if ( value ) {
            this.element.style.borderColor = value;
        } else {
            return String(this.element.style.borderColor);
        }
    }

    borderSpacing = ( value ) => {
        if ( value ) {
            this.element.style.borderSpacing = value;
        } else {
            return String(this.element.style.borderSpacing);
        }
    }

    borderImage = ( value ) => {
        if ( value ) {
            this.element.style.borderImage = value;
        } else {
            return String(this.element.style.borderImage);
        }
    }

    borderImageOutset = ( value ) => {
        if ( value ) {
            this.element.style.borderImageOutset = value;
        } else {
            return String(this.element.style.borderImageOutset);
        }
    }

    borderImageRepeat = ( value ) => {
        if ( value ) {
            this.element.style.borderImageRepeat = value;
        } else {
            return String(this.element.style.borderImageRepeat);
        }
    }

    borderImageSlice = ( value ) => {
        if ( value ) {
            this.element.style.borderImageSlice = value;
        } else {
            return String(this.element.style.borderImageSlice);
        }
    }

    borderImageSource = ( value ) => {
        if ( value ) {
            this.element.style.borderImageSource = value;
        } else {
            return String(this.element.style.borderImageSource);
        }
    }

    borderImageWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderImageWidth = value;
        } else {
            return String(this.element.style.borderImageWidth);
        }
    }

    borderRadius = ( value ) => {
        if ( value ) {
            this.element.style.borderRadius = value;
        } else {
            return String(this.element.style.borderRadius);
        }
    }

    borderTopLeftRadius = ( value ) => {
        if ( value ) {
            this.element.style.borderTopLeftRadius = value;
        } else {
            return String(this.element.style.borderTopLeftRadius);
        }
    }

    borderTopRightRadius = ( value ) => {
        if ( value ) {
            this.element.style.borderTopRightRadius = value;
        } else {
            return String(this.element.style.borderTopRightRadius);
        }
    }

    borderBottomLeftRadius = ( value ) => {
        if ( value ) {
            this.element.style.borderBottomLeftRadius = value;
        } else {
            return String(this.element.style.borderBottomLeftRadius);
        }
    }

    borderBottomRightRadius = ( value ) => {
        if ( value ) {
            this.element.style.borderBottomRightRadius = value;
        } else {
            return String(this.element.style.borderBottomRightRadius);
        }
    }

    borderStyle = ( value ) => {
        if ( value ) {
            this.element.style.borderStyle = value;
        } else {
            return String(this.element.style.borderStyle);
        }
    }

    borderTop = ( value ) => {
        if ( value ) {
            this.element.style.borderTop = value;
        } else {
            return String(this.element.style.borderTop);
        }
    }

    borderRight = ( value ) => {
        if ( value ) {
            this.element.style.borderRight = value;
        } else {
            return String(this.element.style.borderRight);
        }
    }

    borderBottom = ( value ) => {
        if ( value ) {
            this.element.style.borderBottom = value;
        } else {
            return String(this.element.style.borderBottom);
        }
    }

    borderLeft = ( value ) => {
        if ( value ) {
            this.element.style.borderLeft = value;
        } else {
            return String(this.element.style.borderLeft);
        }
    }

    borderTopColor = ( value ) => {
        if ( value ) {
            this.element.style.borderTopColor = value;
        } else {
            return String(this.element.style.borderTopColor);
        }
    }

    borderRightColor = ( value ) => {
        if ( value ) {
            this.element.style.borderRightColor = value;
        } else {
            return String(this.element.style.borderRightColor);
        }
    }

    borderBottomColor = ( value ) => {
        if ( value ) {
            this.element.style.borderBottomColor = value;
        } else {
            return String(this.element.style.borderBottomColor);
        }
    }

    borderLeftColor = ( value ) => {
        if ( value ) {
            this.element.style.borderLeftColor = value;
        } else {
            return String(this.element.style.borderLeftColor);
        }
    }

    borderTopStyle = ( value ) => {
        if ( value ) {
            this.element.style.borderTopStyle = value;
        } else {
            return String(this.element.style.borderTopStyle);
        }
    }

    borderRightStyle = ( value ) => {
        if ( value ) {
            this.element.style.borderRightStyle = value;
        } else {
            return String(this.element.style.borderRightStyle);
        }
    }

    borderBottomStyle = ( value ) => {
        if ( value ) {
            this.element.style.borderBottomStyle = value;
        } else {
            return String(this.element.style.borderBottomStyle);
        }
    }

    borderLeftStyle = ( value ) => {
        if ( value ) {
            this.element.style.borderLeftStyle = value;
        } else {
            return String(this.element.style.borderLeftStyle);
        }
    }

    borderTopWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderTopWidth = value;
        } else {
            return String(this.element.style.borderTopWidth);
        }
    }

    borderRightWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderRightWidth = value;
        } else {
            return String(this.element.style.borderRightWidth);
        }
    }

    borderBottomWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderBottomWidth = value;
        } else {
            return String(this.element.style.borderBottomWidth);
        }
    }

    borderLeftWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderLeftWidth = value;
        } else {
            return String(this.element.style.borderLeftWidth);
        }
    }

    borderWidth = ( value ) => {
        if ( value ) {
            this.element.style.borderWidth = value;
        } else {
            return String(this.element.style.borderWidth);
        }
    }

    boxShadow = ( value ) => {
        if ( value ) {
            this.element.style.boxShadow = value;
        } else {
            return String(this.element.style.boxShadow);
        }
    }

    boxSizing = ( value ) => {
        if ( value ) {
            this.element.style.boxSizing = value;
        } else {
            return String(this.element.style.boxSizing);
        }
    }

    breakAfter = ( value ) => {
        if ( value ) {
            this.element.style.breakAfter = value;
        } else {
            return String(this.element.style.breakAfter);
        }
    }

    breakBefore = ( value ) => {
        if ( value ) {
            this.element.style.breakBefore = value;
        } else {
            return String(this.element.style.breakBefore);
        }
    }

    breakInside = ( value ) => {
        if ( value ) {
            this.element.style.breakInside = value;
        } else {
            return String(this.element.style.breakInside);
        }
    }

    captionSide = ( value ) => {
        if ( value ) {
            this.element.style.captionSide = value;
        } else {
            return String(this.element.style.captionSide);
        }
    }

    clear = ( value ) => {
        if ( value ) {
            this.element.style.clear = value;
        } else {
            return String(this.element.style.clear);
        }
    }

    clip = ( value ) => {
        this.element.style.clip = value;
    }

    clipPath = ( value ) => {
        if ( value ) {
            this.element.style.clipPath = value;
        } else {
            return String(this.element.style.clipPath);
        }
    }

    color = ( value ) => {
        if ( value ) {
            this.element.style.color = value;
        } else {
            return String(this.element.style.color);
        }
    }

    columnCount = ( value ) => {
        if ( value ) {
            this.element.style.columnCount = value;
        } else {
            return String(this.element.style.columnCount);
        }
    }

    columnFill = ( value ) => {
        if ( value ) {
            this.element.style.columnFill = value;
        } else {
            return String(this.element.style.columnFill);
        }
    }

    columnGap = ( value ) => {
        if ( value ) {
            this.element.style.columnGap = value;
        } else {
            return String(this.element.style.columnGap);
        }
    }

    columnRule = ( value ) => {
        if ( value ) {
            this.element.style.columnRule = value;
        } else {
            return String(this.element.style.columnRule);
        }
    }

    columnRuleColor = ( value ) => {
        if ( value ) {
            this.element.style.columnRuleColor = value;
        } else {
            return String(this.element.style.columnRuleColor);
        }
    }

    columnRuleStyle = ( value ) => {
        if ( value ) {
            this.element.style.columnRuleStyle = value;
        } else {
            return String(this.element.style.columnRuleStyle);
        }
    }

    columnRuleWidth = ( value ) => {
        if ( value ) {
            this.element.style.columnRuleWidth = value;
        } else {
            return String(this.element.style.columnRuleWidth);
        }
    }

    columns = ( value ) => {
        if ( value ) {
            this.element.style.columns = value;
        } else {
            return String(this.element.style.columns);
        }
    }

    columnSpan = ( value ) => {
        if ( value ) {
            this.element.style.columnSpan = value;
        } else {
            return String(this.element.style.columnSpan);
        }
    }

    columnWidth = ( value ) => {
        if ( value ) {
            this.element.style.columnWidth = value;
        } else {
            return String(this.element.style.columnWidth);
        }
    }

    content = ( value ) => {
        if ( value ) {
            this.element.style.content = value;
        } else {
            return String(this.element.style.content);
        }
    }

    counterIncrement = ( value ) => {
        if ( value ) {
            this.element.style.counterIncrement = value;
        } else {
            return String(this.element.style.counterIncrement);
        }
    }

    counterReset = ( value ) => {
        if ( value ) {
            this.element.style.counterReset = value;
        } else {
            return String(this.element.style.counterReset);
        }
    }

    cursor = ( value ) => {
        if ( value ) {
            this.element.style.cursor = value;
        } else {
            return String(this.element.style.cursor);
        }
    }

    direction = ( value ) => {
        if ( value ) {
            this.element.style.direction = value;
        } else {
            return String(this.element.style.direction);
        }
    }

    dominantBaseline = ( value ) => {
        if ( value ) {
            this.element.style.dominantBaseline = value;
        } else {
            return String(this.element.style.dominantBaseline);
        }
    }

    emptyCells = ( value ) => {
        if ( value ) {
            this.element.style.emptyCells = value;
        } else {
            return String(this.element.style.emptyCells);
        }
    }

    filter = ( value ) => {
        if ( value ) {
            this.element.style.filter = value;
        } else {
            return String(this.element.style.filter);
        }
    }

    float = ( value ) => {
        if ( value ) {
            this.element.style.float = value;
        } else {
            return String(this.element.style.float);
        }
    }

    font = ( value ) => {
        if ( value ) {
            this.element.style.font = value;
        } else {
            return String(this.element.style.font);
        }
    }

    fontFamily = ( value ) => {
        if ( value ) {
            this.element.style.fontFamily = value;
        } else {
            return String(this.element.style.fontFamily);
        }
    }

    fontFeatureSettings = ( value ) => {
        if ( value ) {
            this.element.style.fontFeatureSettings = value;
        } else {
            return String(this.element.style.fontFeatureSettings);
        }
    }

    fontKerning = ( value ) => {
        if ( value ) {
            this.element.style.fontKerning = value;
        } else {
            return String(this.element.style.fontKerning);
        }
    }

    fontLanguageOverride = ( value ) => {
        if ( value ) {
            this.element.style.fontLanguageOverride = value;
        } else {
            return String(this.element.style.fontLanguageOverride);
        }
    }

    fontSize = ( value ) => {
        if ( value ) {
            this.element.style.fontSize = value;
        } else {
            return String(this.element.style.fontSize);
        }
    }

    fontSizeAdjust = ( value ) => {
        if ( value ) {
            this.element.style.fontSizeAdjust = value;
        } else {
            return String(this.element.style.fontSizeAdjust);
        }
    }

    fontStretch = ( value ) => {
        if ( value ) {
            this.element.style.fontStretch = value;
        } else {
            return String(this.element.style.fontStretch);
        }
    }

    fontStyle = ( value ) => {
        if ( value ) {
            this.element.style.fontStyle = value;
        } else {
            return String(this.element.style.fontStyle);
        }
    }

    fontSynthesis = ( value ) => {
        if ( value ) {
            this.element.style.fontSynthesis = value;
        } else {
            return String(this.element.style.fontSynthesis);
        }
    }

    fontVariant = ( value ) => {
        if ( value ) {
            this.element.style.fontVariant = value;
        } else {
            return String(this.element.style.fontVariant);
        }
    }

    fontVariantAlternates = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantAlternates = value;
        } else {
            return String(this.element.style.fontVariantAlternates);
        }
    }

    fontVariantCaps = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantCaps = value;
        } else {
            return String(this.element.style.fontVariantCaps);
        }
    }

    fontVariantEastAsian = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantEastAsian = value;
        } else {
            return String(this.element.style.fontVariantEastAsian);
        }
    }

    fontVariantLigatures = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantLigatures = value;
        } else {
            return String(this.element.style.fontVariantLigatures);
        }
    }

    fontVariantNumeric = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantNumeric = value;
        } else {
            return String(this.element.style.fontVariantNumeric);
        }
    }

    fontVariantPosition = ( value ) => {
        if ( value ) {
            this.element.style.fontVariantPosition = value;
        } else {
            return String(this.element.style.fontVariantPosition);
        }
    }

    fontWeight = ( value ) => {
        if ( value ) {
            this.element.style.fontWeight = value;
        } else {
            return String(this.element.style.fontWeight);
        }
    }

    grid = ( value ) => {
        if ( value ) {
            this.element.style.grid = value;
        } else {
            return String(this.element.style.grid);
        }
    }

    gridArea = ( value ) => {
        if ( value ) {
            this.element.style.gridArea = value;
        } else {
            return String(this.element.style.gridArea);
        }
    }

    gridAutoColumns = ( value ) => {
        if ( value ) {
            this.element.style.gridAutoColumns = value;
        } else {
            return String(this.element.style.gridAutoColumns);
        }
    }

    gridAutoFlow = ( value ) => {
        if ( value ) {
            this.element.style.gridAutoFlow = value;
        } else {
            return String(this.element.style.gridAutoFlow);
        }
    }

    gridAutoRows = ( value ) => {
        if ( value ) {
            this.element.style.gridAutoRows = value;
        } else {
            return String(this.element.style.gridAutoRows);
        }
    }

    gridColumn = ( value ) => {
        if ( value ) {
            this.element.style.gridColumn = value;
        } else {
            return String(this.element.style.gridColumn);
        }
    }

    gridColumnEnd = ( value ) => {
        if ( value ) {
            this.element.style.gridColumnEnd = value;
        } else {
            return String(this.element.style.gridColumnEnd);
        }
    }

    gridColumnGap = ( value ) => {
        if ( value ) {
            this.element.style.gridColumnGap = value;
        } else {
            return String(this.element.style.gridColumnGap);
        }
    }

    gridColumnStart = ( value ) => {
        if ( value ) {
            this.element.style.gridColumnStart = value;
        } else {
            return String(this.element.style.gridColumnStart);
        }
    }

    gridGap = ( value ) => {
        if ( value ) {
            this.element.style.gridGap = value;
        } else {
            return String(this.element.style.gridGap);
        }

    }

    gridRow = ( value ) => {
        if ( value ) {
            this.element.style.gridRow = value;
        } else {
            return String(this.element.style.gridRow);
        }
    }

    gridRowEnd = ( value ) => {
        if ( value ) {
            this.element.style.gridRowEnd = value;
        } else {
            return String(this.element.style.gridRowEnd);
        }
    }

    gridRowGap = ( value ) => {
        if ( value ) {
            this.element.style.gridRowGap = value;
        } else {
            return String(this.element.style.gridRowGap);
        }
    }

    gridRowStart = ( value ) => {
        if ( value ) {
            this.element.style.gridRowStart = value;
        } else {
            return String(this.element.style.gridRowStart);
        }
    }

    gridTemplate = ( value ) => {
        if ( value ) {
            this.element.style.gridTemplate = value;
        } else {
            return String(this.element.style.gridTemplate);
        }

    }

    gridTemplateAreas = ( value ) => {
        if ( value ) {
            this.element.style.gridTemplateAreas = value;
        } else {
            return String(this.element.style.gridTemplateAreas);
        }
    }

    gridTemplateColumns = ( value ) => {
        if ( value ) {
            this.element.style.gridTemplateColumns = value;
        } else {
            return String(this.element.style.gridTemplateColumns);
        }
    }

    gridTemplateRows = ( value ) => {
        if ( value ) {
            this.element.style.gridTemplateRows = value;
        } else {
            return String(this.element.style.gridTemplateRows);
        }
    }

    hangingPunctuation = ( value ) => {
        if ( value ) {
            this.element.style.hangingPunctuation = value;
        } else {
            return String(this.element.style.hangingPunctuation);
        }
    }

    hyphens = ( value ) => {
        if ( value ) {
            this.element.style.hyphens = value;
        } else {
            return String(this.element.style.hyphens);
        }
    }

    inset = ( value ) => {
        if ( value ) {
            this.element.style.inset = value;
        } else {
            return String(this.element.style.inset);
        }
    }

    imageOrientation = ( value ) => {
        if ( value ) {
            this.element.style.imageOrientation = value;
        } else {
            return String(this.element.style.imageOrientation);
        }
    }

    imageRendering = ( value ) => {
        if ( value ) {
            this.element.style.imageRendering = value;
        } else {
            return String(this.element.style.imageRendering);
        }
    }

    imageResolution = ( value ) => {
        if ( value ) {
            this.element.style.imageResolution = value;
        } else {
            return String(this.element.style.imageResolution);
        }
    }

    justifyItems = ( value ) => {
        if ( value ) {
            this.element.style.justifyItems = value;
        } else {
            return String(this.element.style.justifyItems);
        }
    }

    justifySelf = ( value ) => {
        if ( value ) {
            this.element.style.justifySelf = value;
        } else {
            return String(this.element.style.justifySelf);
        }

    }

    letterSpacing = ( value ) => {
        if ( value ) {
            this.element.style.letterSpacing = value;
        } else {
            return String(this.element.style.letterSpacing);
        }
    }

    lineBreak = ( value ) => {
        if ( value ) {
            this.element.style.lineBreak = value;
        } else {
            return String(this.element.style.lineBreak);
        }

    }

    lineHeight = ( value ) => {
        if ( value ) {
            this.element.style.lineHeight = value;
        } else {
            return String(this.element.style.lineHeight);
        }
    }

    listStyle = ( value ) => {
        if ( value ) {
            this.element.style.listStyle = value;
        } else {
            return String(this.element.style.listStyle);
        }
    }

    listStyleImage = ( value ) => {
        if ( value ) {
            this.element.style.listStyleImage = value;
        } else {
            return String(this.element.style.listStyleImage);
        }
    }

    listStylePosition = ( value ) => {
        if ( value ) {
            this.element.style.listStylePosition = value;
        } else {
            return String(this.element.style.listStylePosition);
        }
    }

    listStyleType = ( value ) => {
        if ( value ) {
            this.element.style.listStyleType = value;
        } else {
            return String(this.element.style.listStyleType);
        }
    }

    mixBlendMode = ( value ) => {
        if ( value ) {
            this.element.style.mixBlendMode = value;
        } else {
            return String(this.element.style.mixBlendMode);
        }
    }

    objectFit = ( value ) => {
        if ( value ) {
            this.element.style.objectFit = value;
        } else {
            return String(this.element.style.objectFit);
        }
    }

    objectPosition = ( value ) => {
        if ( value ) {
            this.element.style.objectPosition = value;
        } else {
            return String(this.element.style.objectPosition);
        }
    }

    orphans = ( value ) => {
        if ( value ) {
            this.element.style.orphans = value;
        } else {
            return String(this.element.style.orphans);
        }
    }

    outline = ( value ) => {
        if ( value ) {
            this.element.style.outline = value;
        } else {
            return String(this.element.style.outline);
        }
    }

    outlineColor = ( value ) => {
        if ( value ) {
            this.element.style.outlineColor = value;
        } else {
            return String(this.element.style.outlineColor);
        }
    }

    outlineOffset = ( value ) => {
        if ( value ) {
            this.element.style.outlineOffset = value;
        } else {
            return String(this.element.style.outlineOffset);
        }
    }

    outlineStyle = ( value ) => {
        if ( value ) {
            this.element.style.outlineStyle = value;
        } else {
            return String(this.element.style.outlineStyle);
        }
    }

    outlineWidth = ( value ) => {
        if ( value ) {
            this.element.style.outlineWidth = value;
        } else {
            return String(this.element.style.outlineWidth);
        }
    }

    opacity = ( value ) => {
        if ( value ) {
            this.element.style.opacity = value;
        } else {
            return String(this.element.style.opacity);
        }
    }

    overflow = ( value ) => {
        if ( value ) {
            this.element.style.overflow = value;
        } else {
            return String(this.element.style.overflow);
        }
    }

    overflowWrap = ( value ) => {
        if ( value ) {
            this.element.style.overflowWrap = value;
        } else {
            return String(this.element.style.overflowWrap);
        }
    }

    overflowX = ( value ) => {
        if ( value ) {
            this.element.style.overflowX = value;
        } else {
            return String(this.element.style.overflowX);
        }
    }

    overflowY = ( value ) => {
        if ( value ) {
            this.element.style.overflowY = value;
        } else {
            return String(this.element.style.overflowY);
        }
    }

    pageBreakAfter = ( value ) => {
        if ( value ) {
            this.element.style.pageBreakAfter = value;
        } else {
            return String(this.element.style.pageBreakAfter);
        }
    }

    pageBreakBefore = ( value ) => {
        if ( value ) {
            this.element.style.pageBreakBefore = value;
        } else {
            return String(this.element.style.pageBreakBefore);
        }
    }

    pageBreakInside = ( value ) => {
        if ( value ) {
            this.element.style.pageBreakInside = value;
        } else {
            return String(this.element.style.pageBreakInside);
        }
    }

    placeItems = ( value ) => {
        if ( value ) {
            this.element.style.placeItems = value;
        } else {
            return String(this.element.style.placeItems);
        }
    }

    pointerEvents = ( value ) => {
        if ( value ) {
            this.element.style.pointerEvents = value;
        } else {
            return String(this.element.style.pointerEvents);
        }
    }

    quotes = ( value ) => {
        if ( value ) {
            this.element.style.quotes = value;
        } else {
            return String(this.element.style.quotes);
        }
    }

    resize = ( value ) => {
        if ( value ) {
            this.element.style.resize = value;
        } else {
            return String(this.element.style.resize);
        }
    }

    tabSize = ( value ) => {
        if ( value ) {
            this.element.style.tabSize = value;
        } else {
            return String(this.element.style.tabSize);
        }
    }

    tableLayout = ( value ) => {
        if ( value ) {
            this.element.style.tableLayout = value;
        } else {
            return String(this.element.style.tableLayout);
        }
    }

    textAlign = ( value ) => {
        if ( value ) {
            this.element.style.textAlign = value;
        } else {
            return String(this.element.style.textAlign);
        }
    }

    textAlignLast = ( value ) => {
        if ( value ) {
            this.element.style.textAlignLast = value;
        } else {
            return String(this.element.style.textAlignLast);
        }
    }

    textDecoration = ( value ) => {
        if ( value ) {
            this.element.style.textDecoration = value;
        } else {
            return String(this.element.style.textDecoration);
        }
    }

    textDecorationLine = ( value ) => {
        if ( value ) {
            this.element.style.textDecorationLine = value;
        } else {
            return String(this.element.style.textDecorationLine);
        }
    }

    textDecorationStyle = ( value ) => {
        if ( value ) {
            this.element.style.textDecorationStyle = value;
        } else {
            return String(this.element.style.textDecorationStyle);
        }
    }

    textDecorationColor = ( value ) => {
        if ( value ) {
            this.element.style.textDecorationColor = value;
        } else {
            return String(this.element.style.textDecorationColor);
        }
    }

    textEmphasis = ( value ) => {
        if ( value ) {
            this.element.style.textEmphasis = value;
        } else {
            return String(this.element.style.textEmphasis);
        }
    }

    textEmphasisColor = ( value ) => {
        if ( value ) {
            this.element.style.textEmphasisColor = value;
        } else {
            return String(this.element.style.textEmphasisColor);
        }
    }

    textEmphasisPosition = ( value ) => {
        if ( value ) {
            this.element.style.textEmphasisPosition = value;
        } else {
            return String(this.element.style.textEmphasisPosition);
        }
    }

    textEmphasisStyle = ( value ) => {
        if ( value ) {
            this.element.style.textEmphasisStyle = value;
        } else {
            return String(this.element.style.textEmphasisStyle);
        }
    }

    textIndent = ( value ) => {
        if ( value ) {
            this.element.style.textIndent = value;
        } else {
            return String(this.element.style.textIndent);
        }
    }

    textOverflow = ( value ) => {
        if ( value ) {
            this.element.style.textOverflow = value;
        } else {
            return String(this.element.style.textOverflow);
        }
    }

    textRendering = ( value ) => {
        if ( value ) {
            this.element.style.textRendering = value;
        } else {
            return String(this.element.style.textRendering);
        }
    }

    textShadow = ( value ) => {
        if ( value ) {
            this.element.style.textShadow = value;
        } else {
            return String();
        }
    }

    textTransform = ( value ) => {
        if ( value ) {
            this.element.style.textTransform = value;
        } else {
            return String(this.element.style.textTransform);
        }
    }

    textUnderlinePosition = ( value ) => {
        if ( value ) {
            this.element.style.textUnderlinePosition = value;
        } else {
            return String(this.element.style.textUnderlinePosition);
        }
    }

    unicodeBidi = ( value ) => {
        if ( value ) {
            this.element.style.unicodeBidi = value;
        } else {
            return String(this.element.style.unicodeBidi);
        }
    }

    verticalAlign = ( value ) => {
        if ( value ) {
            this.element.style.verticalAlign = value;
        } else {
            return String(this.element.style.verticalAlign);
        }
    }

    visibility = ( value ) => {
        if ( value ) {
            this.element.style.visibility = value;
        } else {
            return String(this.element.style.visibility);
        }
    }

    whiteSpace = ( value ) => {
        if ( value ) {
            this.element.style.whiteSpace = value;
        } else {
            return String(this.element.style.whiteSpace);
        }
    }

    widows = ( value ) => {
        if ( value ) {
            this.element.style.widows = value;
        } else {
            return String(this.element.style.widows);
        }
    }

    wordBreak = ( value ) => {
        if ( value ) {
            this.element.style.wordBreak = value;
        } else {
            return String(this.element.style.wordBrea);
        }
    }

    wordSpacing = ( value ) => {
        if ( value ) {
            this.element.style.wordSpacing = value;
        } else {
            return String();
        }
    }

    wordWrap = ( value ) => {
        if ( value ) {
            this.element.style.wordWrap = value;
        } else {
            return String(this.element.style.wordWrap);
        }
    }

    writingMode = ( value ) => {
        if ( value ) {
            this.element.style.writingMode = value;
        } else {
            return String(this.element.style.writingMode);
        }
    }

    zIndex = ( value ) => {
        if ( value ) {
            this.element.style.zIndex = value;
        } else {
            return Number(this.element.style.zIndex);
        }
    }

}