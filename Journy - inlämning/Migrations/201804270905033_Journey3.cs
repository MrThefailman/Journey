namespace Journy___inlämning.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Journey3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.JourneyModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ChosenVehicle = c.String(nullable: false),
                        Date = c.DateTime(nullable: false),
                        MilageStart = c.Int(nullable: false),
                        MilageEnd = c.Int(nullable: false),
                        DistanceTraveled = c.Int(nullable: false),
                        StartingAdress = c.String(nullable: false),
                        ArrivalAdress = c.String(),
                        Matter = c.String(nullable: false),
                        Notes = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.JourneyModels");
        }
    }
}
