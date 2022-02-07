import CardUI from './../cardUI/cardUI';
export default function cardUIWrapper(){
    return (
        <>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId="17" ></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12  col-centered pb-3">
                <CardUI categoryId="18"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="19"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="20"></CardUI>
            </div>
            <div className="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
                <CardUI categoryId="21"></CardUI>
            </div>
        </>
        )
}