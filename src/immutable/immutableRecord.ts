/**
 * Base class for all immutable classes
 */
export abstract class BaseImmutableRecord {
    /**
     * Indicating if we're currently mutating
     * @type {boolean}
     */
    protected isMutating: boolean = false;

    /**
     * Execute mutations
     * @param {(mutated: this) => void} mutator Mutator function. Mutations within mutator will not trigger copying
     * @returns {BaseImmutableRecord} Clone of this with mutations
     */
    public withMutations(mutator: (mutated: this) => void): this {
        const clone = this.clone();
        clone.isMutating = true;
        mutator(clone);
        clone.isMutating = false;
        return clone;
    }

    /**
     * Return mutable copy
     * @returns {BaseImmutableRecord}
     */
    public asMutable(): this {
        if (this.isMutating) {
            return this;
        }
        const clone = this.clone();
        clone.isMutating = true;
        return clone;
    }

    /**
     * Return immutable copy
     * @returns {BaseImmutableRecord}
     */
    public asImmutable(): this {
        if (!this.isMutating) {
            return this;
        }
        return this.clone();
    }

    /**
     * Returns this instance if already mutating or clone of this
     * @returns {this}
     */
    protected cloneIfNeed(): this {
        return this.isMutating ? this : this.clone();
    }

    /**
     * Clone record. Should be overridden in implementations
     */
    protected abstract clone(): this;
}
