const accents = require(".");

test("Normalize accents string", () => {
    const input =
        "ÀÁÂÃÄÅẤẮÆẦẰẢẠẨẪẬÇḈÈÉÊËẾḖỀḔẺẼẸỂỄỆÌÍÎÏḮỈỊÐÑÒÓÔÕÖØỐṌṒỎỌỔỖỘỜỞỠỚỢÙÚÛÜỦỤỬỮỰÝàáâãäåấắæầằảạẩẫậçḉèéêëếḗềḕẻẽẹểễệìíîïḯỉịñòóôõöøốṍṓỏọổỗộờởỡớợùúûüủụửữựýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋ǸǹỒồṐṑỪừẀẁỲỳȀȁȄȅȈȉȌȍȐȑȔȕẲẴẶḜẳẵặḝC̆c̆ḪḫK̆k̆M̆m̆N̆n̆P̆p̆R̆r̆T̆t̆V̆v̆X̆x̆Y̆y̆ȂȆȊȎȃȇȋȏȒȓȖȗșțȘȚB̌b̌F̌f̌ǦǧȞȟJ̌ǰǨǩM̌m̌P̌p̌Q̌q̌ṦṧV̌v̌W̌w̌X̌x̌Y̌y̌A̧a̧B̧b̧ḐḑȨȩƐ̧ɛ̧ḨḩI̧i̧Ɨ̧ɨ̧M̧m̧O̧o̧Q̧q̧U̧u̧X̧x̧Z̧z";
    const output = accents.normalize(input);
    const expected =
        "AAAAAAAAAEAAAAAAACCEEEEEEEEEEEEEEIIIIIIIDNOOOOOOOOOOOOOOOOOOOUUUUUUUUUYaaaaaaaaaeaaaaaaacceeeeeeeeeeeeeeiiiiiiinooooooooooooooooooouuuuuuuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIiNnOoOoUuWwYyAaEeIiOoRrUuAAAEaaaeCcHhKkMmNnPpRrTtVvXxYyAEIOaeioRrUustSTBbFfGgHhJjKkMmPpQqSsVvWwXxYyAaBbDdEeEeHhIiIiMmOoQqUuXxZz";

    expect(output).toBe(expected);
});

test("Normalize cyrillic accents string", () => {
    const input = "ЁёЙй";
    const expected = "ЕеИи";
    const output = accents.normalize(input);

    expect(output).toBe(expected);
});

test("Do not modify non-accented strings", () => {
    const input =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,:;~`!@#$%^&*()-_=+[]{}'\"|\\<>?/eEиИ";
    const output = accents.normalize(input);

    expect(output).toBe(input);
});

test(".has can detect accents", () => {
    expect(accents.has("À")).toBe(true);
    expect(accents.has("Löwe")).toBe(true);

    expect(accents.has("A")).toBe(false);
    expect(accents.has("Panther")).toBe(false);
});

test(".normalize method", () => {
    expect(accents.normalize.toString()).toBe(accents.normalize.toString());

    expect(accents.normalize("cat")).toBe("cat");
    expect(accents.normalize("Pokémon")).toBe("Pokemon");
});
