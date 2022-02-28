import CardUI from './../cardUI/cardUI';
import configurationService from '../../services/configurationService';
export default function cardUIWrapper(props){
    return (
        <>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId={configurationService.findValue('indexFirstGroupNumber',props.config)} ></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId={configurationService.findValue('indexSecondGroupNumber',props.config)}></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId={configurationService.findValue('indexThirdGroupNumber',props.config)}></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId={configurationService.findValue('indexFourthGroupNumber',props.config)}></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId={configurationService.findValue('indexfifthGroupNumber',props.config)}></CardUI>
            </div>
        </>
        )
}