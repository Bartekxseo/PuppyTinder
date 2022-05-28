namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fixedAnimalEntity : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Animal", "AnimalKindId", "dbo.AnimalKind");
            DropIndex("dbo.Animal", new[] { "AnimalKindId" });
            AddColumn("dbo.Animal", "SpecificAnimalKindId", c => c.Int(nullable: false));
            CreateIndex("dbo.Animal", "SpecificAnimalKindId");
            AddForeignKey("dbo.Animal", "SpecificAnimalKindId", "dbo.SpecificAnimalKind", "Id");
            DropColumn("dbo.Animal", "AnimalKindId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Animal", "AnimalKindId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Animal", "SpecificAnimalKindId", "dbo.SpecificAnimalKind");
            DropIndex("dbo.Animal", new[] { "SpecificAnimalKindId" });
            DropColumn("dbo.Animal", "SpecificAnimalKindId");
            CreateIndex("dbo.Animal", "AnimalKindId");
            AddForeignKey("dbo.Animal", "AnimalKindId", "dbo.AnimalKind", "Id");
        }
    }
}
