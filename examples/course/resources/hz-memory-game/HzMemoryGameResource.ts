/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory,ScormService,NavigatorService} from "@haztivity/core";
import "jq-memory-game";
@Resource(
    {
        name:"HzMemoryGame",
        dependencies:[
            $,
            EventEmitterFactory,
            ScormService,
            NavigatorService
        ]
    }
)
export class HzMemoryGameResource extends ResourceController{
    public static readonly NAMESPACE = "hzMemorygame";
    /**
     * Componente de cabecera para haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     * @example
     * div(data-hz-component="HzHeader")
     *      h1(data-hz-header-title)
     */
    constructor(_$: JQueryStatic, _EventEmitterFactory,protected _ScormService:ScormService,protected _NavigatorService:NavigatorService) {
        super(_$, _EventEmitterFactory);
    }
    init(options, config?) {
        this._options = options;
        this._config = config;
        this._$element.memoryGame(this._options.widget);
        if (this._options.autoComplete) {
            this._markAsCompleted()
        }
        this._assignEvents();
    }

    protected _assignEvents(){
        const self = this;
        this._$element.on("memoryGameComplete." + HzMemoryGameResource.NAMESPACE, function(e, instance) {
            self._onEnd();
        });
    }
    protected _onEnd(){
        this._markAsCompleted();
    }
}
