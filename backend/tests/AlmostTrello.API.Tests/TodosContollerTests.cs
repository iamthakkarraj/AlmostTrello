using AlmostTrello.API.Controllers;
using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.BusinessLogic.Interfaces;
using AlmostTrello.Utilities.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AlmostTrello.Tests
{
    [TestFixture]
    public class TodosControllerTests
    {
        private TodosController _controller;
        private Mock<ITodoService> _todoServiceMock;

        [SetUp]
        public void Setup()
        {
            _todoServiceMock = new Mock<ITodoService>();
            _controller = new TodosController(_todoServiceMock.Object);
        }

        [Test]
        public async Task Get_ValidTodoId_ReturnsOk()
        {
            // Arrange
            Guid validTodoId = Guid.NewGuid();
            var expectedTodo = new TodoViewModel { Id = validTodoId, Title = "Test Todo" };
            _todoServiceMock.Setup(s => s.Get(validTodoId)).ReturnsAsync(expectedTodo);

            // Act
            var result = await _controller.Get(validTodoId);

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = result as OkObjectResult;
            var responseModel = okResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(expectedTodo, responseModel.Data);
        }

        [Test]
        public async Task Get_InvalidTodoId_ReturnsBadRequest()
        {
            // Arrange
            Guid invalidTodoId = Guid.NewGuid();
            _todoServiceMock.Setup(s => s.Get(It.IsAny<Guid>()))
                                .ReturnsAsync((Guid id) => (TodoViewModel)null);
            // Act
            var result = await _controller.Get(invalidTodoId);

            // Assert
            Assert.IsInstanceOf<BadRequestObjectResult>(result);
            var badRequestResult = result as BadRequestObjectResult;
            var responseModel = badRequestResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(1, responseModel.ErrorCount);
        }

        [Test]
        public async Task Create_ValidTodo_ReturnsOk()
        {
            // Arrange
            var todoModel = new CreateTodoViewModel { Title = "New Todo" };
            var createdTodo = new TodoViewModel { Id = Guid.NewGuid(), Title = todoModel.Title };
            _todoServiceMock.Setup(s => s.Create(It.IsAny<TodoViewModel>())).ReturnsAsync(createdTodo);

            // Act
            var result = await _controller.Create(todoModel);

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = result as OkObjectResult;
            var responseModel = okResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(createdTodo, responseModel.Data);
        }

        [Test]
        public async Task Update_ValidTodo_ReturnsOk()
        {
            // Arrange
            var todoModel = new TodoViewModel { Id = Guid.NewGuid(), Title = "Updated Todo" };
            _todoServiceMock.Setup(s => s.Update(It.IsAny<TodoViewModel>())).ReturnsAsync(todoModel);

            // Act
            var result = await _controller.Update(todoModel);

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = result as OkObjectResult;
            var responseModel = okResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(todoModel, responseModel.Data);
        }

        [Test]
        public async Task Delete_ValidTodoId_ReturnsOk()
        {
            // Arrange
            Guid validTodoId = Guid.NewGuid();
            var expectedResult = true;
            _todoServiceMock.Setup(s => s.Delete(It.IsAny<Guid>())).Returns(Task.FromResult(true));

            // Act
            var result = await _controller.Delete(validTodoId);

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = result as OkObjectResult;
            var responseModel = okResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(expectedResult, responseModel.Data);
            
        }

        [Test]
        public async Task Get_ReturnsAllTodos()
        {
            // Arrange
            var todos = new List<TodoViewModel>
            {
                new TodoViewModel { Id = Guid.NewGuid(), Title = "Todo 1" },
                new TodoViewModel { Id = Guid.NewGuid(), Title = "Todo 2" },
                new TodoViewModel { Id = Guid.NewGuid(), Title = "Todo 3" }
            };
            _todoServiceMock.Setup(s => s.GetAll()).ReturnsAsync(todos);

            // Act
            var result = await _controller.Get();

            // Assert
            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = result as OkObjectResult;
            var responseModel = okResult.Value as GenericResponseModel<object>;
            Assert.NotNull(responseModel);
            Assert.AreEqual(todos, responseModel.Data);
        }

    }

}