using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.BusinessLogic.Interfaces;
using AlmostTrello.DataAccess;
using AlmostTrello.Utilities.Constants;
using AlmostTrello.Utilities.Models;
using Microsoft.AspNetCore.Mvc;
using static AlmostTrello.Utilities.Constants.RouteConstants;

namespace AlmostTrello.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        #region Variables
        private readonly ITodoService _todoService;
        #endregion

        #region Constructor
        public TodosController(ITodoService todoService)
        {
            this._todoService = todoService;
        }
        #endregion

        #region Action Methods
        [Route(TodoControllerRoutes.GetTodoById)]
        [HttpGet]
        public async Task<IActionResult> Get([FromRoute] Guid todoId)
        {
            var todo = await this._todoService.Get(todoId);
            if (todo == null)
            {
                return BadRequest(new GenericResponseModel<object>()
                {
                    ErrorCount = 1,
                    ErrorMessages = new string[] { Constants.TodoIdIsNotValid },
                    Data = null
                });
            }
            return Ok(new GenericResponseModel<object>(todo));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var todo = await this._todoService.GetAll();
            if (todo == null)
            {
                return BadRequest(new GenericResponseModel<object>()
                {
                    ErrorCount = 1,
                    ErrorMessages = new string[] { Constants.TodoIdIsNotValid },
                    Data = null
                });
            }
            return Ok(new GenericResponseModel<object>(todo));
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateTodoViewModel todoModel)
        {
            var todo = await this._todoService.Create(todoModel.ToViewModel());
            return Ok(new GenericResponseModel<object>(todo));
        }

        [HttpPut]
        public async Task<IActionResult> Update(TodoViewModel todoModel)
        {
            var todo = await this._todoService.Update(todoModel);
            return Ok(new GenericResponseModel<object>(todo));
        }

        [HttpDelete]
        [Route(TodoControllerRoutes.DeleteTodoById)]
        public async Task<IActionResult> Delete([FromRoute] Guid todoId)
        {
            var todo = await this._todoService.Delete(todoId);
            return Ok(new GenericResponseModel<object>(todo));
        }

        #endregion
    }
}
