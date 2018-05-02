namespace Journy___inlämning.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Vehicles2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.NewVehicles", "VehicleActive", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.NewVehicles", "VehicleActive");
        }
    }
}
