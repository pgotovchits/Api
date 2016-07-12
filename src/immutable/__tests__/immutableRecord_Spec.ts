import { expect } from "chai";
import { BaseImmutableRecord } from "../immutableRecord";

class Test extends BaseImmutableRecord {
    /* tslint:disable */
    private _test: string;
    /* tslint:enable */

    public get test(): string {
        return this._test;
    }

    public setTest(newTest: string): this {
        const clone = this.clone();
        clone._test = newTest;
        return clone;
    }

    public testCloneIfNeed() {
        return this.cloneIfNeed();
    }

    protected clone(): this {
        const clone = new Test();
        clone._test = this._test;
        return clone as this;
    }

}

describe("immutable/immutableRecord", () => {
    const initialRecord = new Test().setTest("initial");

    describe("asMutable", () => {
        it("Should return clone of record", () => {
            const record = initialRecord.asMutable();
            expect(record).to.not.equal(initialRecord);
        });

        it("Clone should indicate mutation", () => {
            const record = initialRecord.asMutable();
            expect((record as any).isMutating).to.be.true;
        });

        it("calling asMutable() on already mutable record returns same instance", () => {
            const record = initialRecord.asMutable();
            const record2 = record.asMutable();
            expect(record).to.equal(record2);
        });
    });

    describe("asImmutable", () => {
        it("Calling asImmutable on already non-immutable record returns same instance", () => {
            const record = initialRecord.asImmutable();
            expect(record).to.equal(initialRecord);
        });

        it("Should return clone of record if record is mutating", () => {
            const mutable = initialRecord.asMutable();
            const immutable = mutable.asImmutable();
            expect(immutable).to.not.equal(mutable);
        });
    });

    describe("withMutations", () => {
        it("Should call mutator with mutated clone of instance", () => {
            let mutatedRecord: Test | undefined;
            const changed = initialRecord.withMutations(mutated => {
                mutatedRecord = mutated;
                expect(mutated).to.not.equal(initialRecord);
                expect((mutated as any).isMutating).to.be.true;
            });
            //noinspection JSUnusedAssignment
            expect(mutatedRecord).to.equal(changed);
            expect(changed).to.not.equal(initialRecord);
        });

        it("cloneIfNeed should return same instance within mutator", () => {
            initialRecord.withMutations(mutated => {
                const clone = mutated.testCloneIfNeed();
                expect(clone).to.equal(mutated);
            });
        });
    });

    describe("cloneIfNeed", () => {
        it("Should return same instance if this is mutable", () => {
            const record = initialRecord.asMutable();
            const clone = record.testCloneIfNeed();
            expect(clone).to.equal(record);
        });

        it("Should return new instance if this is immutable", () => {
            const clone = initialRecord.testCloneIfNeed();
            expect(clone).to.not.equal(initialRecord);
        });
    });
});