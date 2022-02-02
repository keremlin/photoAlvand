import CardUI from './../cardUI/cardUI';
export default function cardUIWrapper(){
    return (
        <>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId="1" ></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId="2"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="3"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="4"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="5"></CardUI>
            </div>
        </>
        )
}