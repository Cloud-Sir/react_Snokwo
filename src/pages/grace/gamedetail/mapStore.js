import { gamedetailAsyncAction } from "actions/grace/actionCreator"

export const mapStateToProps = (state) => ({
    gamedetail_list: state.grace.gamedetail_list,
    game_list: state.grace.game_list
})

export const mapDispatchToProps = (dispatch) => ({
    handleGameDetail(game_id) {
        dispatch(gamedetailAsyncAction(game_id))
    }
})