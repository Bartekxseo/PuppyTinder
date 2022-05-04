namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialMigration1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Animal",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AnimalKindId = c.Int(nullable: false),
                        Description = c.String(maxLength: 500),
                        Timeline = c.String(maxLength: 500),
                        ColorId = c.Int(nullable: false),
                        PuppySizeId = c.Int(nullable: false),
                        Age = c.Int(nullable: false),
                        MinYard = c.Single(),
                        MinLivingSpace = c.Single(),
                        Castrated = c.Boolean(nullable: false),
                        LikesKids = c.Boolean(nullable: false),
                        LikesAnimals = c.Boolean(nullable: false),
                        Male = c.Boolean(nullable: false),
                        CustomBoolean1 = c.Boolean(),
                        CustomInteger1 = c.Int(),
                        CustomCharacter1 = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AnimalKind", t => t.AnimalKindId)
                .ForeignKey("dbo.Color", t => t.ColorId)
                .ForeignKey("dbo.PuppySize", t => t.PuppySizeId)
                .Index(t => t.AnimalKindId)
                .Index(t => t.ColorId)
                .Index(t => t.PuppySizeId);
            
            CreateTable(
                "dbo.AnimalKind",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AnimalKindName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PuppySize",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PuppySizeName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Character",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CharacterName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SpecificAnimalKind",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AnimalKindId = c.Int(nullable: false),
                        Kind = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AnimalKind", t => t.AnimalKindId)
                .Index(t => t.AnimalKindId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SpecificAnimalKind", "AnimalKindId", "dbo.AnimalKind");
            DropForeignKey("dbo.Animal", "PuppySizeId", "dbo.PuppySize");
            DropForeignKey("dbo.Animal", "ColorId", "dbo.Color");
            DropForeignKey("dbo.Animal", "AnimalKindId", "dbo.AnimalKind");
            DropIndex("dbo.SpecificAnimalKind", new[] { "AnimalKindId" });
            DropIndex("dbo.Animal", new[] { "PuppySizeId" });
            DropIndex("dbo.Animal", new[] { "ColorId" });
            DropIndex("dbo.Animal", new[] { "AnimalKindId" });
            DropTable("dbo.SpecificAnimalKind");
            DropTable("dbo.Character");
            DropTable("dbo.PuppySize");
            DropTable("dbo.AnimalKind");
            DropTable("dbo.Animal");
        }
    }
}
