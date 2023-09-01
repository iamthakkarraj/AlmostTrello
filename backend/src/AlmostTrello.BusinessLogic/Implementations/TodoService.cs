using AlmostTrello.BusinessEntities;
using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.BusinessLogic.Interfaces;
using AlmostTrello.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.BusinessLogic.Implementations
{
    public class TodoService : ITodoService
    {
        #region Variables
        private readonly ITodoRepository _todoRepository;
        #endregion

        #region Constructor
        public TodoService(ITodoRepository hotelRepositoty)
        {
            _todoRepository = hotelRepositoty;
        }
        #endregion

        #region Service Methods
        public async Task<TodoViewModel?> Get(Guid todoId)
        {
            var todoItem = await _todoRepository.Get(todoId);
            return todoItem;
        }

        public async Task<List<TodoViewModel>> GetAll()
        {
            var todoList = await _todoRepository.GetAll();
            return todoList;
        }

        public async Task<TodoViewModel> Update(TodoViewModel model)
        {
            var todoItem = await _todoRepository.Update(model);
            return todoItem;
        }
        public async Task<TodoViewModel> Create(TodoViewModel model)
        {
            await _todoRepository.Create(model);
            return model;
        }

        public async Task<bool> Delete(Guid id)
        {
            var todoItem = await _todoRepository.Delete(id);
            return todoItem;
        }
        #endregion
    }
}
