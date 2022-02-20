// raw: recorded directly in game sim
// derived: still stored in database, but not directly recorded in game sim
// not present in this file: transiently derived things, like FG%
const stats = {
	derived: [
		"per",
		"ewa",
		"astp",
		"blkp",
		"drbp",
		"orbp",
		"stlp",
		"trbp",
		"usgp",
		"drtg",
		"ortg",
		"dws",
		"ows",
		"obpm",
		"dbpm",
		"vorp",
	] as const,
	raw: [
		"gp",
		"gs",
		"min",
		"minAvailable", // Total minutes available in all games when player was not injured
		"fg",
		"fga",
		"fgAtRim",
		"fgaAtRim",
		"fgLowPost",
		"fgaLowPost",
		"fgMidRange",
		"fgaMidRange",
		"tp",
		"tpa",
		"ft",
		"fta",
		"pm",
		"orb",
		"drb",
		"ast",
		"tov",
		"stl",
		"blk",
		"ba",
		"pf",
		"pts",
		"dd",
		"td",
		"qd",
		"fxf",
	] as const,
	max: [
		"minMax",
		"fgMax",
		"fgaMax",
		"tpMax",
		"tpaMax",
		"ftMax",
		"ftaMax",
		"pmMax",
		"orbMax",
		"drbMax",
		"astMax",
		"tovMax",
		"stlMax",
		"blkMax",
		"baMax",
		"pfMax",
		"ptsMax",
		"2pMax",
		"2paMax",
		"trbMax",
		"gmscMax",
	] as const,
};

export default stats;