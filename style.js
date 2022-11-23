/**
 * @author Junpei Nomura
 * @version v.2.0.0α
 */

/**
 * JavaScriptでCSSのスタイリングをするクラス
 */
 class Style {

    /**
     * @typedef {'%' | 'ch' | 'cm' | 'em' | 'ex' | 'fr' | 'in' | 'mm' | 'pc' | 'pt' | 'px' | 'rem' | 'vh' | 'vmax' | 'vmin' | 'vh'} unit 単位の予測変換
     * @typedef {'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root' | 'none' | 'contents' | 'block flow' | 'inline flow' | 'inline flow-root' | 'block flex' | 'inline flex' | 'block grid' | 'inline grid' | 'block flow-root' | 'table' | 'table-row' | 'list-item' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset'} display displayプロパティの予測変換
     */

    /**
     * @typedef {{
     * width: unit,
     * maxWidth: unit,
     * minWidth: unit,
     * height: unit,
     * maxHeight: unit,
     * minHeight: unit,
     * margin: unit,
     * marginTop: unit,
     * marginRight: unit,
     * marginBottom: unit,
     * marginLeft: unit,
     * padding: unit,
     * paddingTop: unit,
     * paddingRight: unit,
     * paddingBottom: unit,
     * paddingLeft: unit,
     * display: display,
     * position: 'static' | 'absolute' | 'fixed' | 'relative' | 'stick' | 'initial' | 'inherit',
     * top: unit,
     * left: unit,
     * bottom: unit,
     * right: unit,
     * alignContent: string,
     * alignItems: string,
     * alignSelf: string,
     * flex: string,
     * flexBasis: string,
     * flexDirection: string,
     * flexFlow: string,
     * flexGrow: string,
     * flexShrink: string,
     * flexWrap: string,
     * justifyContent: string,
     * order: string,
     * alignmentBaseline: string,
     * animation: string,
     * animationDelay: string,
     * animationDirection: string,
     * animationDuration: string,
     * animationFillMode: string,
     * animationIterationCount: string,
     * animationName: string,
     * animationPlayState: string,
     * animationTimingFunction: string,
     * backfaceVisibility: string,
     * perspective: string,
     * perspectiveOrigin: string,
     * transform: string,
     * transformOrigin: string,
     * transformStyle: string,
     * transition: string,
     * transitionDelay: string,
     * transitionDuration: string,
     * transitionProperty: string,
     * transitionTimingFunction: string,
     * background: string,
     * backgroundAttachment: string,
     * backgroundColor: string,
     * backgroundBlendMode: string,
     * backgroundImage: string,
     * backgroundOrigin: string,
     * backgroundPosition: string,
     * backgroundRepeat: string,
     * backgroundSize: string,
     * border: string,
     * borderCollapse: string,
     * borderColor: string,
     * borderSpacing: string,
     * borderImage: string,
     * borderImageOutset: string,
     * borderImageRepeat: string,
     * borderImageSlice: string,
     * borderImageSource: string,
     * borderImageWidth: string,
     * borderRadius: string,
     * borderTopLeftRadius: string,
     * borderTopRightRadius: string,
     * borderBottomLeftRadius: string,
     * borderBottomRightRadius: string,
     * borderStyle: string,
     * borderTop: string,
     * borderRight: string,
     * borderBottom: string,
     * borderLeft: string,
     * borderTopColor: string,
     * borderRightColor: string,
     * borderBottomColor: string,
     * borderLeftColor: string,
     * borderTopStyle: string,
     * borderRightStyle: string,
     * borderBottomStyle: string,
     * borderLeftStyle: string,
     * borderTopWidth: string,
     * borderRightWidth: string,
     * borderBottomWidth: string,
     * borderLeftWidth: string,
     * borderWidth: string,
     * boxShadow: string,
     * boxSizing: string,
     * breakAfter: string,
     * breakBefore: string,
     * breakInside: string,
     * captionSide: string,
     * clear: string,
     * clip: string,
     * clipPath: string,
     * color: string,
     * columnCount: string,
     * columnFill: string,
     * gap: string,
     * columnGap: string,
     * columnRule: string,
     * columnRuleColor: string,
     * columnRuleStyle: string,
     * columnRuleWidth: string,
     * columns: string,
     * columnSpan: string,
     * columnWidth: string,
     * content: string,
     * counterIncrement: string,
     * counterReset: string,
     * cursor: string,
     * direction: string,
     * dominantBaseline: string,
     * emptyCells: string,
     * filter: string,
     * float: string,
     * font: string,
     * fontFamily: string,
     * fontFeatureSettings: string,
     * fontKerning: string,
     * fontLanguageOverride: string,
     * fontSize: string,
     * fontSizeAdjust: string,
     * fontStretch: string,
     * fontStyle: string,
     * fontSynthesis: string,
     * fontVariant: string,
     * fontVariantAlternates: string,
     * fontVariantCaps: string,
     * fontVariantEastAsian: string,
     * fontVariantLigatures: string,
     * fontVariantNumeric: string,
     * fontVariantPosition: string,
     * fontWeight: string,
     * grid: string,
     * gridArea: string,
     * gridAutoColumns: string,
     * gridAutoFlow: string,
     * gridAutoRows: string,
     * gridColumn: string,
     * gridColumnEnd: string,
     * gridColumnGap: string,
     * gridColumnStart: string,
     * gridGap: string,
     * gridRow: string,
     * gridRowEnd: string,
     * gridRowGap: string,
     * gridRowStart: string,
     * gridTemplate: string,
     * gridTemplateAreas: string,
     * gridTemplateColumns: string,
     * gridTemplateRows: string,
     * hangingPunctuation: string,
     * hyphens: string,
     * inset: string,
     * imageOrientation: string,
     * imageRendering: string,
     * imageResolution: string,
     * justifyItems: string,
     * justifySelf: string,
     * letterSpacing: string,
     * lineBreak: string,
     * lineHeight: string,
     * listStyle: string,
     * listStyleImage: string,
     * listStylePosition: string,
     * listStyleType: string,
     * mixBlendMode: string,
     * objectFit: string,
     * objectPosition: string,
     * orphans: string,
     * outline: string,
     * outlineColor: string,
     * outlineOffset: string,
     * outlineStyle: string,
     * outlineWidth: string,
     * opacity: string,
     * overflow: string,
     * overflowWrap: string,
     * overflowX: string,
     * overflowY: string,
     * pageBreakAfter: string,
     * pageBreakBefore: string,
     * pageBreakInside: string,
     * placeItems: string,
     * pointerEvents: string,
     * quotes: string,
     * resize: string,
     * tabSize: string,
     * tableLayout: string,
     * textAlign: string,
     * textAlignLast: string,
     * textDecoration: string,
     * textDecorationLine: string,
     * textDecorationStyle: string,
     * textDecorationColor: string,
     * textEmphasis: string,
     * textEmphasisColor: string,
     * textEmphasisPosition: string,
     * textEmphasisStyle: string,
     * textIndent: string,
     * textOverflow: string,
     * textRendering: string,
     * textShadow: string,
     * textTransform: string,
     * textUnderlinePosition: string,
     * unicodeBidi: string,
     * verticalAlign: string,
     * visibility: string,
     * whiteSpace: string,
     * widows: string,
     * wordBreak: string,
     * wordSpacing: string,
     * wordWrap: string,
     * writingMode: string,
     * zIndex: string,
     * }} CSSpropertyObj
     */



    // プライベートプロパティ

    /**
     * @type {boolean} 最初だけコンストラクターを通す
     */
    #init = true;

    /**
     * @type {string | HTMLElement | HTMLCollectionOf<Element>} DOM要素
     */
    #element;

    /**
     * @type {string} 「#」や「.」のstringでコンストラクターを作る時に一時的に保存するプロパティ
     */
    #elementName;

    /**
     * @type {Style} このコンストラクターを引き継がずにメソッドチェーンで新たなコンストラクターを作るためのインスタンス
     */
    #newStyle;

    /**
     * @type {{}} コンストラクターが持つCSSの初期値
     */
    #currentStyle;

    /**
     * @type {CSSStyleSheet} Styleクラスで使用するスタイルシート
     */
    #styleSheet;

    /**
     * マウスイベントの文字列を格納するプライベートプロパティ
     */
    #mouseEvent = {
        click: 'click',
        hover: ['mouseover', 'mouseout']
    };

    /**
     * @type {boolean} クリックイベントのステート
     */
    #clickState = true;

    /**
     * @type {Style[]} イベントを適用させた要素を格納
     */
    #Array_constructor = [];

    /**
     * @type {number} イベントを適用させた要素を照合させるためのインデックス
     */
    #constructorIndex = 0;


    /**
     * @type {CSSpropertyObj} クリックした時のスタイル
     */
    #clickStyle;

    /**
     * @type {CSSpropertyObj} ホバーした時のスタイル
     */
    #hoverStyle;


    /**
     * 初期のスタイルを指定するコンストラクター
     * @param {string | HTMLElement | HTMLCollectionOf<Element>} DOMElement DOM要素または文字列
     * @param {CSSpropertyObj} CSSpropertyObj CSSのプロパティと値のオブジェクト
     */
    constructor (DOMElement, CSSpropertyObj) {

        this.#currentStyle = CSSpropertyObj;

        //DOMElementがあった場合の処理
        if (typeof DOMElement !== 'undefined') {
            if (typeof DOMElement === 'string' || DOMElement instanceof String) {

                this.#elementName = DOMElement;

                window.addEventListener('DOMContentLoaded', () => {
                    if(DOMElement.includes('.')) {
                        this.#element = document.getElementsByClassName(DOMElement.replace('.', ''));
                        if (this.#element.length === 0) this.#element = document.querySelectorAll(DOMElement);
                    } else if (DOMElement.includes('#')) {
                        this.#element = document.getElementById(DOMElement.replace('#', ''));
                        if (this.#element.length === 0) this.#element = document.querySelectorAll(DOMElement);
                    } else {
                        this.#element = document.querySelectorAll(DOMElement);
                    }
                });

            } else {

                this.#element = DOMElement;

            }
        }

        // Styleクラスで記述するスタイルシートを取得（スタイルシートは一番下のクラス構文外で定義している）
        Array.from(document.styleSheets).forEach(stylesheet => {
            const ownerNode = stylesheet.ownerNode;
            if (ownerNode.dataset.classStyle === 'class_style') {
                this.#styleSheet = stylesheet;
            }
        });

        // 最初のスタイリングはstyleタグに記述していく
        if (this.#init && typeof this.#elementName !== 'undefined') {
            // CSSpropertyObjがあった場合の処理
            if (typeof CSSpropertyObj !== 'undefined' && typeof CSSpropertyObj === 'object') {
                const toLower = (s) => `-${s.toLowerCase()}`;
                let cssStyle = '';
                for (let property in CSSpropertyObj) {
                    if (/[A-Z]/g.test(property)) {
                        const CSSproperty = property.replace(/[A-Z]/g,toLower);
                        cssStyle += `${CSSproperty}: ${CSSpropertyObj[property]};`;
                    } else {
                        cssStyle += `${property}: ${CSSpropertyObj[property]};`;
                    }
                }
                cssStyle = `${this.#elementName} { ${cssStyle} }`;
                this.#styleSheet.insertRule(cssStyle);
            }
        } else {
            if (typeof CSSpropertyObj !== 'undefined' && typeof CSSpropertyObj === 'object') {
                for (let property in CSSpropertyObj) {
                    this.#applyCSSstyle(CSSpropertyObj[property], property);
                }
            }
        }

    }

    /**
     * 新たに別要素をスタイリングをするコンストラクター(前記のコンストラクターの内容は継承されず新たにコンストラクターを生成する)
     * @param {string | HTMLElement | HTMLCollectionOf<Element>} DOMElement DOM要素または文字列
     * @param {CSSpropertyObj} CSSpropertyObj CSSのプロパティと値のオブジェクト
     * @return {Style} Styleオブジェクトを返す
     */
    _new = (DOMElement, CSSpropertyObj) => {
        this.#newStyle = new Style(DOMElement, CSSpropertyObj);
        return this.#newStyle;
    }

    /**
     * プレフィックスに続いて書く場合のメソッド
     * @param {string | HTMLElement | HTMLCollectionOf<Element>} DOMElement DOM要素または文字列
     * @param {CSSpropertyObj} CSSpropertyObj CSSのプロパティと値のオブジェクト
     * @return {Style} Styleオブジェクトを返す
     */
    _and = (DOMElement, CSSpropertyObj) => {
        if (typeof DOMElement === 'string') {
            this.#newStyle = new Style(`${this.#elementName}${DOMElement}`, CSSpropertyObj);
            return this.#newStyle;
        } else {
            this.#newStyle = new Style(DOMElement, CSSpropertyObj);
            return this.#newStyle;
        }
    }

    /**
     * 前記までのコンストラクターの情報をもとにアニメーションなどをユーザが定義するコールバック関数
     * @param {(argument: this) => void?} userFunction ユーザ定義の関数(引数に現在のコンストラクターを入れる)
     * @return {Style} Styleオブジェクトを返す
     * @return {Style} Styleオブジェクトを返す
     */
    _function = (userFunction) => {
        userFunction(this);
        return this;
    }

    /**
     * this.#Array_constructorにイベントを適用されたオブジェクトを追加する
     * @param {CSSpropertyObj} styleObj CSSのスタイリング情報が入ったオブジェクト
     * @param {MouseEvent} e マウスイベント
     * @return {Style[]}
     */
    #addEventToArray = (e) => {

        const $target = e.currentTarget;

        if (this.#Array_constructor.length === 0) {
            let instance = new Style($target);
            instance.#clickStyle = this.#clickStyle;
            instance.#hoverStyle = this.#hoverStyle;
            this.#Array_constructor.push(instance);
        } else {
            for (let i = 0; i < this.#Array_constructor.length; i++) {
                if (this.#Array_constructor[i].#constructorIndex === i && this.#Array_constructor[i].#element === $target) {
                    break;
                }
                if (this.#Array_constructor[i].#element !== $target && i === this.#Array_constructor.length - 1) {
                    let instance = new Style($target);
                    instance.#clickStyle = this.#clickStyle;
                    instance.#hoverStyle = this.#hoverStyle;
                    instance.#constructorIndex = i + 1;
                    this.#Array_constructor.push(instance);
                }
            }
        }

        return this.#Array_constructor;

    }

    /**
     * ホバー時のスタイルを指定するメソッド
     * @param {CSSpropertyObj} CSSpropertyObj CSSのプロパティと値のオブジェクト
     * @param {(argument: MouseEvent) => void?} mouseover マウスポインターが要素に乗っている時のユーザ定義のコールバック関数
     * @param {(argument: MouseEvent) => void?} mouseout マウスポインターが要素を出た時のユーザ定義のコールバック関数
     */
    _hover = (CSSpropertyObj, mouseover, mouseout) => {

        this.#hoverStyle = CSSpropertyObj;

        window.addEventListener('DOMContentLoaded', () => {
            if (this.#element instanceof HTMLElement) {

                this.#mouseEvent.hover.forEach(hoverEvent => this.#element.addEventListener(hoverEvent, (e) => this.#hover(CSSpropertyObj, e, hoverEvent)));

                if (typeof mouseover !== 'undefined') this.#element.addEventListener(this.#mouseEvent.hover[0], (e) => mouseover(e));
                if (typeof mouseout !== 'undefined') this.#element.addEventListener(this.#mouseEvent.hover[1], (e) => mouseout(e));

            } else {
                for (let i = 0; i < this.#element.length; i++) {

                    this.#mouseEvent.hover.forEach(hoverEvent => this.#element[i].addEventListener(hoverEvent, (e) => this.#hover(CSSpropertyObj, e, hoverEvent)));

                    if (typeof mouseover !== 'undefined') this.#element[i].addEventListener(this.#mouseEvent.hover[0], (e) => mouseover(e));
                    if (typeof mouseout !== 'undefined') this.#element[i].addEventListener(this.#mouseEvent.hover[1], (e) => mouseout(e));

                }
            }
        });

        return this;

    }

    /**
     * ホバーした時の処理
     * @param {CSSpropertyObj} styleObj CSSのスタイリング情報が入ったオブジェクト
     * @param {MouseEvent} e クリックイベント
     * @param {'mouseover' | 'mouseout'} type マウスホバーのタイプ
     * @return {void}
     */
    #hover = (styleObj, e, type) => {

        const $target = e.currentTarget;

        this.#addEventToArray(e).forEach(obj => {
            if (obj.#element === $target) {

                obj.#currentStyle = this.#currentStyle;

                for (let property in $target.style) {
                    if (isNaN(property)) {
                        if (typeof obj.#currentStyle[property] === 'undefined' && typeof this[property] !== 'undefined') {
                            obj.#currentStyle[property] = $target.style[property];
                        }
                    }
                }

                if (type === this.#mouseEvent.hover[1]) {
                    if (obj._isClickToggle()) {
                        for (let property in obj.#currentStyle) {
                            if (!obj.#clickStyle[property] && obj.#hoverStyle[property]) {
                                if (obj.#hoverStyle[property]) {
                                    obj[property]('revert');
                                }
                            }
                        }
                    } else {
                        for (let property in obj.#currentStyle) {
                            obj[property](obj.#currentStyle[property]);
                        }
                    }
                } else {
                    if (obj._isClickToggle()) {
                        for (let property in obj.#currentStyle) {
                            if (!obj.#clickStyle[property] && obj.#hoverStyle[property]) {
                                if (obj.#hoverStyle[property]) {
                                    obj[property](obj.#hoverStyle[property]);
                                }
                            }
                        }
                    } else {
                        for (let property in this.#hoverStyle) {
                            obj[property](this.#hoverStyle[property]);
                        }
                    }
                }
            }
        });

    }

    /**
     * クリック時のスタイルを指定するメソッド
     * @param {CSSpropertyObj} CSSpropertyObj CSSのプロパティと値のオブジェクト
     * @param {(argument1: MouseEvent, argument2: this) => void?} click ユーザが定義するクリックイベントのコールバック関数
     */
    _click = (CSSpropertyObj, click) => {

        this.#clickStyle = CSSpropertyObj;

        window.addEventListener('DOMContentLoaded', () => {
            if (this.#element instanceof HTMLElement) {

                this.#element.addEventListener(this.#mouseEvent.mouseover, (e) => this.#clickHandler(CSSpropertyObj, e));

                if (typeof mouseover !== 'undefined') this.#element.addEventListener(this.#mouseEvent.click, (e) => click(e, this.#searchConstructor(this.#element, this.#Array_constructor)));

            } else {

                for (let i = 0; i < this.#element.length; i++) {

                    this.#element[i].addEventListener(this.#mouseEvent.click, (e) => this.#clickHandler(CSSpropertyObj, e));

                    if (typeof click !== 'undefined') this.#element[i].addEventListener(this.#mouseEvent.click, (e) => click(e, this.#searchConstructor(this.#element[i], this.#Array_constructor)));

                }
            }
        });

        return this;

    }

    /**
     * クリックしている(イベントを発火させている要素)Styleコンストラクターを探す
     * @param {HTMLElement} $elm DOM要素
     * @param {Style[]} Array_constructor イベントを適用させた要素の配列
     * @return {Style}
     */
    #searchConstructor = ($elm, Array_constructor) => {
        let constructorObj;
        Array_constructor.forEach(obj => {
            if (obj.#element === $elm) {
                constructorObj = obj;
            }
        });
        return constructorObj;
    };

    /**
     * クリックした時の処理
     * @param {CSSpropertyObj} styleObj CSSのスタイリング情報が入ったオブジェクト
     * @param {MouseEvent} e クリックイベント
     * @return {void}
     */
    #clickHandler = (styleObj, e) => {

        e.preventDefault();
        const $target = e.currentTarget;
        let $targetStyleObj = this.#currentStyle;


        for (let property in $target.style) {
            if (isNaN(property)) {
                if (typeof $targetStyleObj[property] === 'undefined' && typeof this[property] !== 'undefined') {
                    $targetStyleObj[property] = $target.style[property];
                }
            }
        }

        this.#addEventToArray(e).forEach(obj => {
            if (obj.#element === $target) {
                if (obj.#clickState) {
                    for (let property in styleObj) {
                        obj[property](styleObj[property]);
                    }
                    obj.#clickState = false;
                } else {
                    for (let property in obj.#clickStyle) {
                        if (obj.#clickStyle[property] && obj.#hoverStyle[property]) {
                            obj[property](obj.#hoverStyle[property]);
                        } else {
                            obj[property]('revert');
                        }
                    }
                    obj.#clickState = true;
                }
            }
        });

    }

    /**
     * 要素をクリック（トグル）したかどうか条件値として返す
     * @return {boolean}
     */
    _isClickToggle = () => {
        // 仕様上、要素を1回クリックするとfalseが返るため返り値を期待の値に変換する
        if (this.#clickState) {
            return false;
        } else {
            return true;
        }
    }

    // ここでCSSのスタイリングをする機関部
    /**
     * CSSのプロパティ名同じメソッドに対して適用させるプライベート関数(メソッド)
     * @param {string} value メソッドから引数で受け取ったCSSプロパティの値
     * @param {string} thisMethodName Styleクラスのメソッド名
     * @return {void | StringConstructor | string[]}
     */
    #applyCSSstyle = (value, thisMethodName) => {
        if (typeof value !== 'undefined') {
            if (this.#element instanceof HTMLElement) {
                this.#element.style[thisMethodName] = value;
            } else {
                for (let i = 0; i < this.#element.length; i++) {
                    this.#element[i].style[thisMethodName] = value;
                }
            }
        } else {
            if (this.#element instanceof HTMLElement) {
                return String(this.#element.style[thisMethodName]);
            } else {
                let array_value = [];
                for (let i = 0; i < this.#element.length; i++) {
                    array_value.push(this.#element[i].style[thisMethodName]);
                }
                return array_value;
            }
        }
    }

    /**
     * 幅を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    width = (value) => this.#applyCSSstyle(value, this.width.name);

    /**
     * 最大幅を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    maxWidth = (value) => this.#applyCSSstyle(value, this.maxWidth.name);

    /**
     * 最小幅を指定する目メソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    minWidth = (value) => this.#applyCSSstyle(value, this.minWidth.name);

    /**
     * 高さを指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    height = (value) => this.#applyCSSstyle(value, this.height.name);

    /**
     * 最大の高さを指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    maxHeight = (value) => this.#applyCSSstyle(value, this.maxHeight.name);

    /**
     * 最小の高さを指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    minHeight = (value) => this.#applyCSSstyle(value, this.minHeight.name);

    /**
     * 枠外の余白を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    margin = (value) => this.#applyCSSstyle(value, this.margin.name);

    /**
     * 枠外の余白(上)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    marginTop = (value) => this.#applyCSSstyle(value, this.marginTop.name);

    /**
     * 枠外の余白(右)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    marginRight = (value) => this.#applyCSSstyle(value, this.marginRight.name);

    /**
     * 枠外の余白(下)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    marginBottom = (value) => this.#applyCSSstyle(value, this.marginBottom.name);

    /**
     * 枠外の余白(上)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    marginLeft = (value) => this.#applyCSSstyle(value, this.marginLeft.name);

    /**
     * 枠内の余白を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    padding = (value) => this.#applyCSSstyle(value, this.padding.name);

    /**
     * 枠内の余白(上)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    paddingTop = (value) => this.#applyCSSstyle(value, this.paddingTop.name);

    /**
     * 枠内の余白(右)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    paddingRight = (value) => this.#applyCSSstyle(value, this.paddingRight.name);

    /**
     * 枠内の余白(下)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    paddingBottom = (value) => this.#applyCSSstyle(value, this.paddingBottom.name);

    /**
     * 枠内の余白(上)を指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    paddingLeft = (value) => this.#applyCSSstyle(value, this.paddingLeft.name);

    /**
     * 表示の振る舞いを指定するメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    display = (value) => this.#applyCSSstyle(value, this.display.name);

    displayBlock = () => {
        this.#element.style.display = 'block';
    }

    displayFlex = () => {
        this.#element.style.display = 'flex';
    }

    displayInlineBlock = () => {
        this.#element.style.display = 'inlineBlock';
    }

    displayNone = () => {
        this.#element.style.display = 'none';
    }

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    position = (value) => this.#applyCSSstyle(value, this.position.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    top = (value) => this.#applyCSSstyle(value, this.top.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    left = (value) => this.#applyCSSstyle(value, this.left.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    bottom = (value) => this.#applyCSSstyle(value, this.bottom.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    right = (value) => this.#applyCSSstyle(value, this.right.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    alignContent = (value) => this.#applyCSSstyle(value, this.alignContent.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    alignItems = (value) => this.#applyCSSstyle(value, this.alignItems.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    alignSelf = (value) => this.#applyCSSstyle(value, this.alignSelf.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flex = (value) => this.#applyCSSstyle(value, this.flex.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexBasis = (value) => this.#applyCSSstyle(value, this.flexBasis.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexDirection = (value) => this.#applyCSSstyle(value, this.flexDirection.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexFlow = (value) => this.#applyCSSstyle(value, this.flexFlow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexGrow = (value) => this.#applyCSSstyle(value, this.flexGrow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexShrink = (value) => this.#applyCSSstyle(value, this.flexShrink.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    flexWrap = (value) => this.#applyCSSstyle(value, this.flexWrap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    justifyContent = (value) => this.#applyCSSstyle(value, this.justifyContent.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    order = (value) => this.#applyCSSstyle(value, this.order.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    alignmentBaseline = (value) => this.#applyCSSstyle(value, this.alignmentBaseline.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animation = (value) => this.#applyCSSstyle(value, this.animation.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationDelay = (value) => this.#applyCSSstyle(value, this.animationDelay.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationDirection = (value) => this.#applyCSSstyle(value, this.animationDirection.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationDuration = (value) => this.#applyCSSstyle(value, this.animationDuration.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationFillMode = (value) => this.#applyCSSstyle(value, this.animationFillMode.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationIterationCount = (value) => this.#applyCSSstyle(value, this.animationIterationCount.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationName = (value) => this.#applyCSSstyle(value, this.animationName.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationPlayState = (value) => this.#applyCSSstyle(value, this.animationPlayState.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    animationTimingFunction = (value) => this.#applyCSSstyle(value, this.animationTimingFunction.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backfaceVisibility = (value) => this.#applyCSSstyle(value, this.backfaceVisibility.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    perspective = (value) => this.#applyCSSstyle(value, this.perspective.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    perspectiveOrigin = (value) => this.#applyCSSstyle(value, this.perspectiveOrigin.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transform = (value) => this.#applyCSSstyle(value, this.transform.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transformOrigin = (value) => this.#applyCSSstyle(value, this.transformOrigin.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transformStyle = (value) => this.#applyCSSstyle(value, this.transformStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transition = (value) => this.#applyCSSstyle(value, this.transition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transitionDelay = (value) => this.#applyCSSstyle(value, this.transitionDelay.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transitionDuration = (value) => this.#applyCSSstyle(value, this.transitionDuration.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transitionProperty = (value) => this.#applyCSSstyle(value, this.transitionProperty.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    transitionTimingFunction = (value) => this.#applyCSSstyle(value, this.transitionTimingFunction.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    background = (value) => this.#applyCSSstyle(value, this.background.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundAttachment = (value) => this.#applyCSSstyle(value, this.backgroundAttachment.name);

    /**
     * 背景色を変えるメソッド
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string []}
     */
    backgroundColor = (value) => this.#applyCSSstyle(value, this.backgroundColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundBlendMode = (value) => this.#applyCSSstyle(value, this.backgroundBlendMode.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundImage = (value) => this.#applyCSSstyle(value, this.backgroundImage.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundOrigin = (value) => this.#applyCSSstyle(value, this.backgroundOrigin.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundPosition = (value) => this.#applyCSSstyle(value, this.backgroundPosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundRepeat = (value) => this.#applyCSSstyle(value, this.backgroundRepeat.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    backgroundSize = (value) => this.#applyCSSstyle(value, this.backgroundSize.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    border = (value) => this.#applyCSSstyle(value, this.border.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderCollapse = (value) => this.#applyCSSstyle(value, this.borderCollapse.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderColor = (value) => this.#applyCSSstyle(value, this.borderColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderSpacing = (value) => this.#applyCSSstyle(value, this.borderSpacing.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImage = (value) => this.#applyCSSstyle(value, this.borderImage.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImageOutset = (value) => this.#applyCSSstyle(value, this.borderImageOutset.name);
    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImageRepeat = (value) => this.#applyCSSstyle(value, this.borderImageRepeat.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImageSlice = (value) => this.#applyCSSstyle(value, this.borderImageSlice.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImageSource = (value) => this.#applyCSSstyle(value, this.borderImageSource.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderImageWidth = (value) => this.#applyCSSstyle(value, this.borderImageWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderRadius = (value) => this.#applyCSSstyle(value, this.borderRadius.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTopLeftRadius = (value) => this.#applyCSSstyle(value, this.borderTopLeftRadius.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTopRightRadius = (value) => this.#applyCSSstyle(value, this.borderTopRightRadius.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottomLeftRadius = (value) => this.#applyCSSstyle(value, this.borderBottomLeftRadius.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottomRightRadius = (value) => this.#applyCSSstyle(value, this.borderBottomRightRadius.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderStyle = (value) => this.#applyCSSstyle(value, this.borderStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTop = (value) => this.#applyCSSstyle(value, this.borderTop.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderRight = (value) => this.#applyCSSstyle(value, this.borderRight.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottom = (value) => this.#applyCSSstyle(value, this.borderBottom.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderLeft = (value) => this.#applyCSSstyle(value, this.borderLeft.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTopColor = (value) => this.#applyCSSstyle(value, this.borderTopColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderRightColor = (value) => this.#applyCSSstyle(value, this.borderRightColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottomColor = (value) => this.#applyCSSstyle(value, this.borderBottomColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderLeftColor = (value) => this.#applyCSSstyle(value, this.borderLeftColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTopStyle = (value) => this.#applyCSSstyle(value, this.borderTopStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderRightStyle = (value) => this.#applyCSSstyle(value, this.borderRightStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottomStyle = (value) => this.#applyCSSstyle(value, this.borderBottomStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderLeftStyle = (value) => this.#applyCSSstyle(value, this.borderLeftStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderTopWidth = (value) => this.#applyCSSstyle(value, this.borderTopWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderRightWidth = (value) => this.#applyCSSstyle(value, this.borderRightWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderBottomWidth = (value) => this.#applyCSSstyle(value, this.borderBottomWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderLeftWidth = (value) => this.#applyCSSstyle(value, this.borderLeftWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    borderWidth = (value) => this.#applyCSSstyle(value, this.borderWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    boxShadow = (value) => this.#applyCSSstyle(value, this.boxShadow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    boxSizing = (value) => this.#applyCSSstyle(value, this.boxSizing.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    breakAfter = (value) => this.#applyCSSstyle(value, this.breakAfter.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    breakBefore = (value) => this.#applyCSSstyle(value, this.breakBefore.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    breakInside = (value) => this.#applyCSSstyle(value, this.breakInside.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    captionSide = (value) => this.#applyCSSstyle(value, this.captionSide.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    clear = (value) => this.#applyCSSstyle(value, this.clear.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    clip = (value) => this.#applyCSSstyle(value, this.clip.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    clipPath = (value) => this.#applyCSSstyle(value, this.clipPath.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    color = (value) => this.#applyCSSstyle(value, this.color.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnCount = (value) => this.#applyCSSstyle(value, this.columnCount.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnFill = (value) => this.#applyCSSstyle(value, this.columnFill.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gap = (value) => this.#applyCSSstyle(value, this.gap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnGap = (value) => this.#applyCSSstyle(value, this.columnGap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnRule = (value) => this.#applyCSSstyle(value, this.columnRule.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnRuleColor = (value) => this.#applyCSSstyle(value, this.columnRuleColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnRuleStyle = (value) => this.#applyCSSstyle(value, this.columnRuleStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnRuleWidth = (value) => this.#applyCSSstyle(value, this.columnRuleWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columns = (value) => this.#applyCSSstyle(value, this.columns.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnSpan = (value) => this.#applyCSSstyle(value, this.columnSpan.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    columnWidth = (value) => this.#applyCSSstyle(value, this.columnWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    content = (value) => this.#applyCSSstyle(value, this.content.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    counterIncrement = (value) => this.#applyCSSstyle(value, this.counterIncrement.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    counterReset = (value) => this.#applyCSSstyle(value, this.counterReset.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    cursor = (value) => this.#applyCSSstyle(value, this.cursor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    direction = (value) => this.#applyCSSstyle(value, this.direction.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    dominantBaseline = (value) => this.#applyCSSstyle(value, this.dominantBaseline.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    emptyCells = (value) => this.#applyCSSstyle(value, this.emptyCells.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    filter = (value) => this.#applyCSSstyle(value, this.filter.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    float = (value) => this.#applyCSSstyle(value, this.float.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    font = (value) => this.#applyCSSstyle(value, this.font.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontFamily = (value) => this.#applyCSSstyle(value, this.fontFamily.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontFeatureSettings = (value) => this.#applyCSSstyle(value, this.fontFeatureSettings.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontKerning = (value) => this.#applyCSSstyle(value, this.fontKerning.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontLanguageOverride = (value) => this.#applyCSSstyle(value, this.fontLanguageOverride.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontSize = (value) => this.#applyCSSstyle(value, this.fontSize.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontSizeAdjust = (value) => this.#applyCSSstyle(value, this.fontSizeAdjust.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontStretch = (value) => this.#applyCSSstyle(value, this.fontStretch.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontStyle = (value) => this.#applyCSSstyle(value, this.fontStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontSynthesis = (value) => this.#applyCSSstyle(value, this.fontSynthesis.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariant = (value) => this.#applyCSSstyle(value, this.fontVariant.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantAlternates = (value) => this.#applyCSSstyle(value, this.fontVariantAlternates.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantCaps = (value) => this.#applyCSSstyle(value, this.fontVariantCaps.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantEastAsian = (value) => this.#applyCSSstyle(value, this.fontVariantEastAsian.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantLigatures = (value) => this.#applyCSSstyle(value, this.fontVariantLigatures.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantNumeric = (value) => this.#applyCSSstyle(value, this.fontVariantNumeric.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontVariantPosition = (value) => this.#applyCSSstyle(value, this.fontVariantPosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    fontWeight = (value) => this.#applyCSSstyle(value, this.fontWeight.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    grid = (value) => this.#applyCSSstyle(value, this.grid.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridArea = (value) => this.#applyCSSstyle(value, this.gridArea.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridAutoColumns = (value) => this.#applyCSSstyle(value, this.gridAutoColumns.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridAutoFlow = (value) => this.#applyCSSstyle(value, this.gridAutoFlow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridAutoRows = (value) => this.#applyCSSstyle(value, this.gridAutoRows.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridColumn = (value) => this.#applyCSSstyle(value, this.gridColumn.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridColumnEnd = (value) => this.#applyCSSstyle(value, this.gridColumnEnd.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridColumnGap = (value) => this.#applyCSSstyle(value, this.gridColumnGap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridColumnStart = (value) => this.#applyCSSstyle(value, this.gridColumnStart.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridGap = (value) => this.#applyCSSstyle(value, this.gridGap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridRow = (value) => this.#applyCSSstyle(value, this.gridRow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridRowEnd = (value) => this.#applyCSSstyle(value, this.gridRowEnd.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridRowGap = (value) => this.#applyCSSstyle(value, this.gridRowGap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridRowStart = (value) => this.#applyCSSstyle(value, this.gridRowStart.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridTemplate = (value) => this.#applyCSSstyle(value, this.gridTemplate.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridTemplateAreas = (value) => this.#applyCSSstyle(value, this.gridTemplateAreas.name);
    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridTemplateColumns = (value) => this.#applyCSSstyle(value, this.gridTemplateColumns.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    gridTemplateRows = (value) => this.#applyCSSstyle(value, this.gridTemplateRows.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    hangingPunctuation = (value) => this.#applyCSSstyle(value, this.hangingPunctuation.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    hyphens = (value) => this.#applyCSSstyle(value, this.hyphens.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    inset = (value) => this.#applyCSSstyle(value, this.inset.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    imageOrientation = (value) => this.#applyCSSstyle(value, this.imageOrientation.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    imageRendering = (value) => this.#applyCSSstyle(value, this.imageRendering.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    imageResolution = (value) => this.#applyCSSstyle(value, this.imageResolution.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    justifyItems = (value) => this.#applyCSSstyle(value, this.justifyItems.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    justifySelf = (value) => this.#applyCSSstyle(value, this.justifySelf.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    letterSpacing = (value) => this.#applyCSSstyle(value, this.letterSpacing.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    lineBreak = (value) => this.#applyCSSstyle(value, this.lineBreak.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    lineHeight = (value) => this.#applyCSSstyle(value, this.lineHeight.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    listStyle = (value) => this.#applyCSSstyle(value, this.listStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    listStyleImage = (value) => this.#applyCSSstyle(value, this.listStyleImage.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    listStylePosition = (value) => this.#applyCSSstyle(value, this.listStylePosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    listStyleType = (value) => this.#applyCSSstyle(value, this.listStyleType.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    mixBlendMode = (value) => this.#applyCSSstyle(value, this.mixBlendMode.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    objectFit = (value) => this.#applyCSSstyle(value, this.objectFit.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    objectPosition = (value) => this.#applyCSSstyle(value, this.objectPosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    orphans = (value) => this.#applyCSSstyle(value, this.orphans.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    outline = (value) => this.#applyCSSstyle(value, this.outline.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    outlineColor = (value) => this.#applyCSSstyle(value, this.outlineColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    outlineOffset = (value) => this.#applyCSSstyle(value, this.outlineOffset.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    outlineStyle = (value) => this.#applyCSSstyle(value, this.outlineStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    outlineWidth = (value) => this.#applyCSSstyle(value, this.outlineWidth.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    opacity = (value) => this.#applyCSSstyle(value, this.opacity.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    overflow = (value) => this.#applyCSSstyle(value, this.overflow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    overflowWrap = (value) => this.#applyCSSstyle(value, this.overflowWrap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    overflowX = (value) => this.#applyCSSstyle(value, this.overflowX.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    overflowY = (value) => this.#applyCSSstyle(value, this.overflowY.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    pageBreakAfter = (value) => this.#applyCSSstyle(value, this.pageBreakAfter.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    pageBreakBefore = (value) => this.#applyCSSstyle(value, this.pageBreakBefore.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    pageBreakInside = (value) => this.#applyCSSstyle(value, this.pageBreakInside.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    placeItems = (value) => this.#applyCSSstyle(value, this.placeItems.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    pointerEvents = (value) => this.#applyCSSstyle(value, this.pointerEvents.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    quotes = (value) => this.#applyCSSstyle(value, this.quotes.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    resize = (value) => this.#applyCSSstyle(value, this.resize.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    tabSize = (value) => this.#applyCSSstyle(value, this.tabSize.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    tableLayout = (value) => this.#applyCSSstyle(value, this.tableLayout.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textAlign = (value) => this.#applyCSSstyle(value, this.textAlign.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textAlignLast = (value) => this.#applyCSSstyle(value, this.textAlignLast.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textDecoration = (value) => this.#applyCSSstyle(value, this.textDecoration.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textDecorationLine = (value) => this.#applyCSSstyle(value, this.textDecorationLine.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textDecorationStyle = (value) => this.#applyCSSstyle(value, this.textDecorationStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textDecorationColor = (value) => this.#applyCSSstyle(value, this.textDecorationColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textEmphasis = (value) => this.#applyCSSstyle(value, this.textEmphasis.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textEmphasisColor = (value) => this.#applyCSSstyle(value, this.textEmphasisColor.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textEmphasisPosition = (value) => this.#applyCSSstyle(value, this.textEmphasisPosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textEmphasisStyle = (value) => this.#applyCSSstyle(value, this.textEmphasisStyle.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textIndent = (value) => this.#applyCSSstyle(value, this.textIndent.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textOverflow = (value) => this.#applyCSSstyle(value, this.textOverflow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textRendering = (value) => this.#applyCSSstyle(value, this.textRendering.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textShadow = (value) => this.#applyCSSstyle(value, this.textShadow.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textTransform = (value) => this.#applyCSSstyle(value, this.textTransform.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    textUnderlinePosition = (value) => this.#applyCSSstyle(value, this.textUnderlinePosition.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    unicodeBidi = (value) => this.#applyCSSstyle(value, this.unicodeBidi.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    verticalAlign = (value) => this.#applyCSSstyle(value, this.verticalAlign.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    visibility = (value) => this.#applyCSSstyle(value, this.visibility.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    whiteSpace = (value) => this.#applyCSSstyle(value, this.whiteSpace.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    widows = (value) => this.#applyCSSstyle(value, this.widows.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    wordBreak = (value) => this.#applyCSSstyle(value, this.wordBreak.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    wordSpacing = (value) => this.#applyCSSstyle(value, this.wordSpacing.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    wordWrap = (value) => this.#applyCSSstyle(value, this.wordWrap.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    writingMode = (value) => this.#applyCSSstyle(value, this.writingMode.name);

    /**
     * 
     * @param {string} value 適用させるCSSプロパティの値
     * @return {void | StringConstructor | string[]}
     */
    zIndex = (value) => this.#applyCSSstyle(value, this.zIndex.name);

}



/* ---------------------------------------------------------------------------------------------------- */

// ページ読み込み時のtransitionを無効にする処理とStyleクラスで使うstyleSheetをheadタグに追加
((d) => {

    'use strict'

    const CLASS_PRELOAD = 'preload';

    const styleTag = d.createElement('style');
    styleTag.dataset.classStyle = 'class_style';
    d.head.appendChild(styleTag);
    window,addEventListener('DOMContentLoaded', () => d.body.classList.add(CLASS_PRELOAD));

    /**
     * @type {CSSStyleSheet}
     */
    let styleSheet;

    Array.from(d.styleSheets).forEach(thisStyleSheet =>{
        const ownerNode = thisStyleSheet.ownerNode;
        if(ownerNode.dataset.classStyle === 'class_style'){
            styleSheet = thisStyleSheet;
        }
    });

    styleSheet.insertRule(`.${CLASS_PRELOAD} * { -webkit-transition: none !important; -moz-transition: none !important; -ms-transition: none !important; -o-transition: none !important; transition: none !important; }`, styleSheet.cssRules.length);

    window.addEventListener('load', () => {
        d.body.classList.remove(CLASS_PRELOAD);
        Array.from(styleSheet.cssRules).forEach((CSSStyleRule, i) => {if (CSSStyleRule.selectorText === `.${CLASS_PRELOAD} *`) delete styleSheet.deleteRule(i);});
    });

})(document);

/* ---------------------------------------------------------------------------------------------------- */