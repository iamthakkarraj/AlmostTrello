using AlmostTrello.BusinessEntities;
using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataEntities.DataModels;

namespace AlmostTrello.DataAccess.Interfaces
{
    public interface ITodoRepository
    {
        Task<TodoViewModel?> Get(Guid todoId);
        Task<List<TodoViewModel>> GetAll();
        Task Create(TodoViewModel model);
        Task<TodoViewModel> Update(TodoViewModel model);
        Task<bool> Delete(Guid id);
    }
}