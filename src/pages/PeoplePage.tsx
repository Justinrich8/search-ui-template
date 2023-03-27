import { useLayoutEffect } from 'react';
import { useSearchActions } from '@yext/search-headless-react';
import {
  AppliedFilters,
  FilterSearch,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  LocationBias,
  StaticFilters,
  StandardFacets,
  HierarchicalFacets,
  FilterDivider,
  ApplyFiltersButton,
  Pagination,
  NumericalFacets,
  AlternativeVerticals
} from '@yext/search-ui-react';
// import { CustomCard } from '../components/CustomCard';

const hierarchicalFacetFieldIds = ['c_hierarchicalFacet'];
const filterSearchFields = [{ fieldApiName: 'name', entityType: 'ce_person' }];
const employeeFilterConfigs = [
  { value: 'Consulting' },
  { value: 'Technology' }
];
const hierarchicalFilterConfigs = [
  { value: 'Computer & Tablets' }
];
const alternativeVerticalsConfigMap = {
  products: { label: 'Products' }
};

export function PeoplePage() {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.setVertical('people');
    searchActions.executeVerticalQuery();
  });

  return (
    <div>
      <SearchBar />
      <div className='flex'>
        <div className='w-56 shrink-0 mr-5'>
          <FilterSearch
<<<<<<< HEAD
            searchFields={[{ fieldApiName: 'name', entityType: 'ce_person' }]}
=======
            searchFields={filterSearchFields}
>>>>>>> 30044ed (Updated files and packages)
            searchOnSelect={true}
            label='Filters'
          />
          <FilterDivider />
          <StaticFilters
            fieldId='c_employeeDepartment'
            title='Static Employee Department'
<<<<<<< HEAD
            filterOptions={[
              { value: 'Consulting' },
              { value: 'Technology' }
            ]}
=======
            filterOptions={employeeFilterConfigs}
>>>>>>> 30044ed (Updated files and packages)
          />
          <StaticFilters
            fieldId='c_hierarchicalFacet'
            title='Static Hierarchical Facets'
<<<<<<< HEAD
            filterOptions={[
              { value: 'Computer & Tablets' },
            ]}
=======
            filterOptions={hierarchicalFilterConfigs}
>>>>>>> 30044ed (Updated files and packages)
          />
          <NumericalFacets />
          <StandardFacets
            excludedFieldIds={hierarchicalFacetFieldIds}
          />
          <HierarchicalFacets
            collapsible={true}
            includedFieldIds={hierarchicalFacetFieldIds}
          />
          <br />
          <ApplyFiltersButton />
        </div>
        <div className='flex-grow'>
          <AlternativeVerticals
            currentVerticalLabel='People'
<<<<<<< HEAD
            verticalConfigMap={{
              products: { label: 'Products' }
            }}
=======
            verticalConfigMap={alternativeVerticalsConfigMap}
>>>>>>> 30044ed (Updated files and packages)
          />
          <div className='flex items-baseline'>
            <ResultsCount />
            <AppliedFilters hierarchicalFacetsFieldIds={hierarchicalFacetFieldIds} />
          </div>
          <VerticalResults
            CardComponent={StandardCard}
          />
          {/* Test generic result type  */}
          {/* <VerticalResults
            CardComponent={CustomCard}
          /> */}
          <Pagination />
          <LocationBias />
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 30044ed (Updated files and packages)
