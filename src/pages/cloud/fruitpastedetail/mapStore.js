import { fruitpasteAction} from "actions/cloud/cloudActionCreator"

export const mapStateToProps = (state) => ({
    
})

export const mapDispatchToProps = (dispatch) => ({
    handlefruitpasteAsync(id) {
        dispatch(fruitpasteAction(id))
    }
})