using System;
using System.Collections.Generic;
using AlmostTrello.DataEntities.DataModels;
using AlmostTrello.Utilities.Helpers;
using Microsoft.EntityFrameworkCore;

namespace AlmostTrello.DataEntities.DBContext;

public partial class AlmostTrelloDBContext : DbContext
{
    public AlmostTrelloDBContext()
    {
    }

    public AlmostTrelloDBContext(DbContextOptions<AlmostTrelloDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Todo> Todos { get; set; }
    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite(ConfigurationSettings.AlmostTrelloDbConnectionString);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Todo>(entity =>
        {
            entity.ToTable("Todo");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
