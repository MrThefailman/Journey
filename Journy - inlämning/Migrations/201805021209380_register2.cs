namespace Journy___inlämning.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class register2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.NewVehicles", "VehicleActive");
        }
        
        public override void Down()
        {
            AddColumn("dbo.NewVehicles", "VehicleActive", c => c.Boolean(nullable: false));
        }
    }
}
